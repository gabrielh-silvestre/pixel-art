/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useArt } from '../../hooks/useArt';
import { getRandomColor } from '../../services';

import { Container } from './style';
import Color from '../Color';

export default function Pallete() {
  const { colorQuantity } = useArt();
  const [colors, setColors] = useState<string[]>([]);

  useEffect((): void => {
    setColors([]);

    for (let i = 0; i < colorQuantity; i += 1) {
      i === 0
        ? setColors((prevColors): string[] => [...prevColors, 'black'])
        : setColors((prevColors): string[] => [...prevColors, getRandomColor()]);
    }
  }, [colorQuantity]);

  return (
    <Container>
      {colors.map((color, i) => (
        <Color key={i} bgColor={color} />
      ))}
    </Container>
  );
}
