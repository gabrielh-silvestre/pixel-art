import { useEffect, useState } from 'react';
import randomColor from 'randomcolor';

import { useArt } from '../../hooks/useArt';

import { Container } from './style';
import Color from '../Color';

export default function Pallete() {
  const { colorQuantity } = useArt();
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const randomColors = randomColor({
      count: colorQuantity - 1,
      format: 'hex',
      luminosity: 'random',
      hue: 'random',
    });

    setColors([
      'black',
      ...randomColors,
    ]);
  }, [colorQuantity]);

  return (
    <Container>
      {colors.map((color, i) => (
        <Color key={i} bgColor={color} />
      ))}
    </Container>
  );
}
