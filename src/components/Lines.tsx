/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Pixel from './Pixel';

interface LinesProps {
  amount: number;
}

export default function Lines({ amount }: LinesProps) {
  const [pixels, setPixels] = useState<JSX.Element[]>([]);

  const genPixel = (): void => {
    for (let i = 0; i < amount; i += 1) {
      setPixels((prevPixels) => [
        ...prevPixels,
        <Pixel key={i} size={amount} />,
      ]);
    }
  };

  useEffect((): void => {
    genPixel();
  }, []);

  return <div className="flex">{pixels.map((pixel) => pixel)}</div>;
}
