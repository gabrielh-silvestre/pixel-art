import { createContext, ReactNode, useContext, useState } from 'react';

interface ArtContextProps {
  children: ReactNode;
}

interface ArtContextData {
  size: number;
  selectedColor: string;
  colorQuantity: number;
  dragPaint: boolean;
  resetCanvas: boolean;
  setSize: (newSize: number) => void;
  setSelectedColor: (color: string) => void;
  setColorQuantity: (colorNumber: number) => void;
  setDragPaint: (isToDrag: boolean) => void;
  setResetCanvas: (paintedColor: boolean) => void;
}

const MAX_CANVAS_SIZE = 70;
const MIN_CANVAS_SIZE = 5;

const MAX_COLORS_NUMBER = 64;
const MIN_COLORS_NUMBER = 4;

const ArtContext = createContext<ArtContextData>({} as ArtContextData);

export function ArtProvider({ children }: ArtContextProps) {
  const [quantity, setQuantity] = useState({ canvas: 5, colors: 16 });
  const [selectedColor, setSelectedColor] = useState('black');
  const [dragPaint, setDragPaint] = useState(false);
  const [resetCanvas, setResetCanvas] = useState(true);

  const handleCanvasSize = (newSize: number) => {
    if (newSize > MAX_CANVAS_SIZE) {
      setQuantity({
        ...quantity,
        canvas: MAX_CANVAS_SIZE,
      });
    } else if (newSize < MIN_CANVAS_SIZE) {
      setQuantity({
        ...quantity,
        canvas: MIN_CANVAS_SIZE,
      });
    } else {
      setQuantity({
        ...quantity,
        canvas: newSize,
      });
    }
  }

  const handlePalleteSize = (newSize: number) => {
    if (newSize > MAX_COLORS_NUMBER) {
      setQuantity({
        ...quantity,
        colors: MAX_COLORS_NUMBER,
      });
    } else if (newSize < MIN_COLORS_NUMBER) {
      setQuantity({
        ...quantity,
        colors: MIN_COLORS_NUMBER,
      });
    } else {
      setQuantity({
        ...quantity,
        colors: newSize,
      });
    }
  }

  return (
    <ArtContext.Provider
      value={{
        size: quantity.canvas,
        selectedColor,
        colorQuantity: quantity.colors,
        dragPaint,
        resetCanvas,
        setSize: handleCanvasSize,
        setSelectedColor,
        setColorQuantity: handlePalleteSize,
        setDragPaint,
        setResetCanvas,
      }}
    >
      {children}
    </ArtContext.Provider>
  );
}

export function useArt() {
  const context = useContext(ArtContext);

  return context;
}
