import { createContext, ReactNode, useContext, useState } from 'react';

interface PalleteProviderProps {
  children: ReactNode;
}

interface PalleteContextData {
  colorQuantity: number;
  setColorQuantity: (colorNumber: number) => void;
}

const PalleteContext = createContext<PalleteContextData>(
  {} as PalleteContextData
);

export function PalleteProvider({ children }: PalleteProviderProps) {
  const [colorQuantity, setColorQuantity] = useState(16);

  return (
    <PalleteContext.Provider value={{ colorQuantity, setColorQuantity }}>
      {children}
    </PalleteContext.Provider>
  );
}

export function usePallete() {
  const context = useContext(PalleteContext);

  return context;
}
