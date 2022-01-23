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

const ArtContext = createContext<ArtContextData>({} as ArtContextData);

export function ArtProvider({ children }: ArtContextProps) {
  const [quantity, setQuantity] = useState({ canvas: 5, colors: 16 });
  const [selectedColor, setSelectedColor] = useState('black');
  const [dragPaint, setDragPaint] = useState(false);
  const [resetCanvas, setResetCanvas] = useState(true);

  const handleCanvasSize = (newCanvasSize: number) => {
    setQuantity({ ...quantity, canvas: newCanvasSize });
  };

  const handlePalleteSize = (newColorQuantity: number) => {
    setQuantity({ ...quantity, colors: newColorQuantity });
  };

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
