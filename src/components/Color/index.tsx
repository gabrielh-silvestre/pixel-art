import { useArt } from '../../hooks/useArt';

import { ColorContainer } from './style';

interface ColorProps {
  bgColor: string;
}

export default function Color({ bgColor }: ColorProps) {
  const { setSelectedColor, selectedColor } = useArt();

  return (
    <ColorContainer
      bgColor={ bgColor }
      $isSelected={ bgColor === selectedColor}
      onClick={() => setSelectedColor(bgColor)}
    />
  );
}
