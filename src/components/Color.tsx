import React from 'react';

interface ColorProps {
  bgColor: string;
}

export default function Color({ bgColor }: ColorProps) {
  return (
    <div
      className="w-12 h-12 mx-1 rounded-full shadow"
      style={{ backgroundColor: bgColor }}
    />
  );
}
