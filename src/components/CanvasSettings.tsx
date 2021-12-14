import React, { useState } from 'react';

import { useCanvas } from '../hooks/useCanvas';

export default function CanvasSettings() {
  const [newSize, setNewSize] = useState(5);
  const { setSize } = useCanvas();

  const handleNewCanvasSize = () => {
    setSize(newSize);
  };

  return (
    <div className="flex items-end">
      <label
        htmlFor="many-colors-input"
        className="mt-6 flex flex-col text-gray-200"
      >
        Quantos quadros?
        <input
          type="number"
          id="many-colors-input"
          className="h-8 pl-4 rounded-md text-black"
          onChange={({ target: { value } }) => {
            setNewSize(Number.parseInt(value, 10));
          }}
        />
      </label>

      <button
        type="button"
        className="ml-2 py-1 px-3 bg-green-800 rounded-xl"
        onClick={handleNewCanvasSize}
      >
        Gerar
      </button>
    </div>
  );
}
