/* eslint-disable react-hooks/exhaustive-deps */
import { useArt } from '../../hooks/useArt';

import { Button, CanvasContainer, Container } from './style';
import Lines from '../Lines';

export default function Canvas() {
  const { size, resetCanvas, setResetCanvas, setDragPaint } = useArt();
  const lines = new Array(size).fill(1);

  const resetPaintedPixels = () => {
    setResetCanvas(!resetCanvas);
  };

  return (
    <Container>
      <CanvasContainer
        onMouseDown={() => setDragPaint(true)}
        onMouseUp={() => setDragPaint(false)}
        onMouseLeave={() => setDragPaint(false)}
      >
        {lines.map((_, i) => <Lines key={`${i}-${size}`} />)}
      </CanvasContainer>
      <Button type="button" onClick={resetPaintedPixels}>
        Reset
      </Button>
    </Container>
  );
}
