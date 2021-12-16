/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useArt } from '../../hooks/useArt';

import { Button, CanvasContainer, Container } from './style';
import Lines from '../Lines';

export default function Canvas() {
  const { size } = useArt();
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [resetCanvasKey, setResetCanvasKey] = useState(0);

  const genLines = () => {
    setLines([]);
    for (let i = 0; i < size; i += 1) {
      setLines((prevLines) => [
        ...prevLines,
        <Lines key={`${i}-${size}`} amount={size} />,
      ]);
    }
  };

  const genRandomKey = () => Math.round(Math.random() * 1000);

  const resetCanvas = () => {
    setResetCanvasKey(genRandomKey());
  };

  useEffect(() => {
    genLines();
  }, [size]);

  return (
    <Container>
      <CanvasContainer key={resetCanvasKey}>
        {lines.map((line) => line)}
      </CanvasContainer>
      <Button
        type="button"
        onClick={resetCanvas}
      >
        Reset
      </Button>
    </Container>
  );
}
