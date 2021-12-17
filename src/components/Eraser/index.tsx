import { useArt } from '../../hooks/useArt';

import { EraserButton } from './style';

export default function Eraser() {
  const { setSelectedColor, selectedColor } = useArt();

  return (
    <EraserButton
      type="button"
      $isSelected={selectedColor === 'white'}
      onClick={() => {
        setSelectedColor('white');
      }}
    >
      Borracha
    </EraserButton>
  );
}
