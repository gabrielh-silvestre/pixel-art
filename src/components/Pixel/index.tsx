import { useEffect, useState } from 'react';

import { useArt } from '../../hooks/useArt';
import { dragPreventDefault } from '../../services';

import { PixelContainer } from './style';

interface PixelProps {
  index: number;
}

export default function Pixel({ index }: PixelProps) {
  const { size, selectedColor, dragPaint, resetCanvas } = useArt();
  const [thisColor, setThisColor] = useState('white');

  const handleDragPaint = () => {
    dragPaint && setThisColor(selectedColor);
  };

  const handleStartPaint = () => {
    setThisColor(selectedColor);
  };

  useEffect(() => {
    setThisColor('white');
  }, [resetCanvas]);

  return (
    <PixelContainer
      key={`${thisColor}+${index}`}
      size={size}
      bgColor={thisColor}
      onMouseDown={handleStartPaint}
      onMouseOver={handleDragPaint}
      onDragStart={dragPreventDefault}
    />
  );
}
