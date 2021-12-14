import React, { useState } from 'react';

import { useArt } from '../hooks/useArt';

export default function PalleteSettings() {
  const [manyColors, setManyColors] = useState(0);
  const { setColorQuantity } = useArt();

  const handleNewColorQuantity = () => {
    setColorQuantity(manyColors);
  };

  return (
    <div className="flex items-end">
      <label
        htmlFor="many-colors-input"
        className="mt-6 flex flex-col text-gray-200"
      >
        Quantas cores?
        <input
          type="number"
          id="many-colors-input"
          className="h-8 pl-4 rounded-md text-black"
          onChange={({ target: { value } }) => {
            setManyColors(Number.parseInt(value, 10));
          }}
        />
      </label>

      <button
        type="button"
        className="ml-2 py-1 px-3 bg-green-800 rounded-xl"
        onClick={handleNewColorQuantity}
      >
        Gerar
      </button>
    </div>
  );
}
