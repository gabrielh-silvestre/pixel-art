import { useState } from 'react';

import { useArt } from '../../hooks/useArt';

import { PixelContainer } from './style';

interface PixelProps {
  size: number;
}

export default function Pixel({ size }: PixelProps) {
  const { selectedColor, dragPaint, setDragPaint } = useArt();
  const [thisColor, setThisColor] = useState('white');

  const handleDragPaint = () => {
    dragPaint && setThisColor(selectedColor);
  };

  return (
    <PixelContainer
      size={size}
      bgColor={thisColor}
      onMouseUp={() => setDragPaint(false)}
      onMouseDown={() => {
        setThisColor(selectedColor);
        setDragPaint(true);
      }}
      onMouseOver={handleDragPaint}
      onDragStart={() => false}
    />
  );
}
