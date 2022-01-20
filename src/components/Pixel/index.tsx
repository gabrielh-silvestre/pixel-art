import { useEffect, useState } from 'react';

import { useArt } from '../../hooks/useArt';

import { PixelContainer } from './style';

interface PixelProps {
  size: number;
  index: number;
}

export default function Pixel({ size, index }: PixelProps) {
  const { selectedColor, dragPaint, resetCanvas, setDragPaint } = useArt();
  const [thisColor, setThisColor] = useState('white');

  const handleDragPaint = () => {
    dragPaint && setThisColor(selectedColor);
  };

  const handleStartPaint = () => {
    setThisColor(selectedColor);
    setDragPaint(true);
  };

  useEffect(() => {
    setThisColor('white');
  }, [resetCanvas])

  return (
    <PixelContainer
      key={`${thisColor}+${index}`}
      size={size}
      bgColor={thisColor}
      onMouseUp={() => setDragPaint(false)}
      onMouseDown={handleStartPaint}
      onMouseOver={handleDragPaint}
      onDragStart={() => false}
    />
  );
}
