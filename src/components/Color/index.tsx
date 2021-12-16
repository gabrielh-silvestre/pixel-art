import { useArt } from '../../hooks/useArt';

import { ColorContainer } from './style';

interface ColorProps {
  bgColor: string;
}

export default function Color({ bgColor }: ColorProps) {
  const { setSelectedColor } = useArt();

  return (
    <ColorContainer
      bgColor={ bgColor }
      onClick={() => setSelectedColor(bgColor)}
    />
  );
}
