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
  const [colorQuantity, setColorQuantity] = useState(16);
  const [size, setSize] = useState(5);
  const [selectedColor, setSelectedColor] = useState('black');
  const [dragPaint, setDragPaint] = useState(false);
  const [resetCanvas, setResetCanvas] = useState(true);

  return (
    <ArtContext.Provider
      value={{
        size,
        selectedColor,
        colorQuantity,
        dragPaint,
        resetCanvas,
        setSize,
        setSelectedColor,
        setColorQuantity,
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
