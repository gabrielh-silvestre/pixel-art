import { useArt } from '../../hooks/useArt';

export default function Eraser() {
  const { setSelectedColor } = useArt();

  return (
    <button
      type="button"
      className="w-32 h-10 mt-8 bg-gray-light rounded-md"
      onClick={() => {
        setSelectedColor('white');
      }}
    >
      Borracha
    </button>
  );
}
