import React, { useState } from 'react';

import { useArt } from '../hooks/useArt';

interface PixelProps {
  size: number;
}

export default function Pixel({ size }: PixelProps) {
  const { selectedColor } = useArt();
  const [thisColor, setThisColor] = useState('white');

  return (
    <div
      className="border-1 border-black border-solid inline-block"
      style={{
        width: `${384 / size}px`,
        height: `${384 / size}px`,
        backgroundColor: thisColor,
      }}
      onClick={() => {
        setThisColor(selectedColor);
      }}
    />
  );
}
