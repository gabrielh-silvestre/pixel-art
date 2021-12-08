import React from 'react';

interface PixelProps {
  size: number;
}

export default function Pixel({ size }: PixelProps) {
  return (
    <div
      className="border-1 border-black border-solid inline-block"
      style={{ width: `${384 / size}px`, height: `${384 / size}px`, backgroundColor: 'white' }}
    />
  );
}
