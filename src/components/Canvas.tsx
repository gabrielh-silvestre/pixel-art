/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useCanvas } from '../hooks/useCanvas';

import Lines from './Lines';

export default function Canvas() {
  const { size } = useCanvas();
  const [lines, setLines] = useState<JSX.Element[]>([]);

  const genLines = () => {
    setLines([]);
    for (let i = 0; i < size; i += 1) {
      setLines((prevLines) => [...prevLines, <Lines key={`${i}-${size}`} amount={size} />]);
    }
  };

  useEffect(() => {
    genLines();
  }, [size]);

  return (
    <section className="canvas w-96 h-96 rounded-xl">
      {lines.map((line) => line)}
    </section>
  );
}
