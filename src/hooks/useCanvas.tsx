import { createContext, ReactNode, useContext, useState } from "react";

interface CanvasProviderProps {
  children: ReactNode;
}

interface CanvasContextData {
  size: number;
  setSize: (newSize: number) => void;
}

const CanvasContext = createContext<CanvasContextData>(
  {} as CanvasContextData
);

export function CanvasProvider({ children }: CanvasProviderProps) {
  const [size, setSize] = useState(5);

  return (
    <CanvasContext.Provider value={{ size, setSize }}>
      {children}
    </CanvasContext.Provider>
  )
}

export function useCanvas() {
  const context = useContext(CanvasContext);

  return context;
}
