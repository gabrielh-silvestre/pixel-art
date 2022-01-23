/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useArt } from '../../hooks/useArt';

import { Button, CanvasContainer, Container } from './style';
import Lines from '../Lines';

export default function Canvas() {
  const { size, resetCanvas, setResetCanvas, setDragPaint } = useArt();
  const [lines, setLines] = useState<JSX.Element[]>([]);

  const genLines = () => {
    setLines([]);
    for (let i = size; i > 0; i -= 1) {
      setLines((prevLines) => [
        ...prevLines,
        <Lines key={`${i}-${size}`} amount={size} />,
      ]);
    }
  };

  const resetPaintedPixels = () => {
    setResetCanvas(!resetCanvas);
  };

  useEffect(() => {
    genLines();
  }, [size]);

  return (
    <Container>
      <CanvasContainer
        onMouseDown={() => setDragPaint(true)}
        onMouseUp={() => setDragPaint(false)}
        onMouseLeave={() => setDragPaint(false)}
      >
        {lines.map((line) => line)}
      </CanvasContainer>
      <Button type="button" onClick={resetPaintedPixels}>
        Reset
      </Button>
    </Container>
  );
}
