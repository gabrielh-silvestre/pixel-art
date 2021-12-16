import { useArt } from '../../hooks/useArt';

import { EraserButton } from './style';

export default function Eraser() {
  const { setSelectedColor } = useArt();

  return (
    <EraserButton
      type="button"
      onClick={() => {
        setSelectedColor('white');
      }}
    >
      Borracha
    </EraserButton>
  );
}
