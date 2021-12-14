import { useArt } from '../hooks/useArt';

interface ColorProps {
  bgColor: string;
}

export default function Color({ bgColor }: ColorProps) {
  const { setSelectedColor } = useArt();

  return (
    <div
      className="w-12 h-12 mx-1 rounded-full shadow"
      style={{ backgroundColor: bgColor }}
      onClick={() => setSelectedColor(bgColor)}
    />
  );
}
