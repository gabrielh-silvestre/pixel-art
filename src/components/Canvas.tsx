/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useArt } from '../hooks/useArt';

import Lines from './Lines';

export default function Canvas() {
  const { size } = useArt();
  const [lines, setLines] = useState<JSX.Element[]>([]);

  const genLines = () => {
    setLines([]);
    for (let i = 0; i < size; i += 1) {
      setLines((prevLines) => [
        ...prevLines,
        <Lines key={`${i}-${size}`} amount={size} />,
      ]);
    }
  };

  useEffect(() => {
    genLines();
  }, [size]);

  return (
    <div className="flex-col items-center">
      <section className="canvas w-96 h-96 rounded-xl">
        {lines.map((line) => line)}
      </section>
      <button
        type="button"
        className="w-full mt-4 py-1 px-3 bg-gray-200 rounded-md"
        onClick={genLines}
      >
        Reset
      </button>
    </div>
  );
}
