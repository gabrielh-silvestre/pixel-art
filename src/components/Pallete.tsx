/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useArt } from '../hooks/useArt';
import { getRandomColor } from '../services';

import Color from './Color';

export default function Pallete() {
  const { colorQuantity } = useArt();
  const [colors, setColors] = useState<string[]>([]);

  useEffect((): void => {
    setColors([]);

    for (let i = 0; i < colorQuantity; i += 1) {
      setColors((prevColors): string[] => [...prevColors, getRandomColor()]);
    }
  }, [colorQuantity]);

  return (
    <section className="w-64 min-h-0 max-h-64 p-4 flex flex-wrap justify-center bg-gray-200 rounded-xl overflow-y-auto">
      {colors.map((color, i) => (
        <Color key={i} bgColor={color} />
      ))}
    </section>
  );
}
