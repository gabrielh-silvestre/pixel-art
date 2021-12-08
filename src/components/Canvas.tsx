/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Lines from './Lines';

export default function Canvas() {
  const [size] = useState(5);
  const [lines, setLines] = useState<JSX.Element[]>([]);

  const genLines = () => {
    for (let i = 0; i < size; i += 1) {
      setLines((prevLines) => [...prevLines, <Lines key={i} amount={size} />]);
    }
  };

  useEffect((): void => {
    genLines();
  }, []);

  return (
    <section className="canvas w-96 h-96 rounded-xl">
      {lines.map((line) => line)}
    </section>
  );
}
