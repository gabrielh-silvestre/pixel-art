import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ColorContextProps {
  children: ReactNode;
}

interface ColorContextProvider {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextProvider>(
  {} as ColorContextProvider
);

export function ColorProvider({ children }: ColorContextProps) {
  const [selectedColor, setSelectedColor] = useState('black');

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);

  return context;
}
