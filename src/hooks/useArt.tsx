import { createContext, ReactNode, useContext, useState } from 'react';

interface ArtContextProps {
  children: ReactNode;
}

interface ArtContextData {
  size: number;
  selectedColor: string;
  colorQuantity: number;
  setSize: (newSize: number) => void;
  setSelectedColor: (color: string) => void;
  setColorQuantity: (colorNumber: number) => void;
}

const ArtContext = createContext<ArtContextData>({} as ArtContextData);

export function ArtProvider({ children }: ArtContextProps) {
  const [colorQuantity, setColorQuantity] = useState(16);
  const [size, setSize] = useState(5);
  const [selectedColor, setSelectedColor] = useState('black');

  return (
    <ArtContext.Provider
      value={{
        colorQuantity,
        setColorQuantity,
        size,
        setSize,
        selectedColor,
        setSelectedColor,
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
