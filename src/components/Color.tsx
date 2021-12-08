import React from 'react';

interface ColorProps {
  bgColor: string;
}

export default function Color({ bgColor }: ColorProps) {
  return <div className="w-12 h-12 rounded-full" style={{ backgroundColor: bgColor }} />;
}
