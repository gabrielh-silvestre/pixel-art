/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { getRandomColor } from '../services';

import Color from './Color';

export default function Pallete() {
  const [colors, setColors] = useState<string[]>([]);
  const [colorQuantity] = useState(1);

  useEffect((): void => {
    for (let i = 0; i < colorQuantity; i += 1) {
      setColors((prevColors): string[] => [...prevColors, getRandomColor()]);
    }
  }, [colorQuantity]);

  return (
    <section>
      {colors.map((color, i) => (
        <Color key={i} bgColor={color} />
      ))}
    </section>
  );
}
