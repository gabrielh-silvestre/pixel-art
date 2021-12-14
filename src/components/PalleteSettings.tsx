import React, { useState } from 'react';
import { usePallete } from '../hooks/usePallete';

export default function PalleteSettings() {
  const [manyColors, setManyColors] = useState(0);
  const { setColorQuantity } = usePallete();

  const handleNewColorQuantity = () => {
    setColorQuantity(manyColors);
  };

  return (
    <div>
      <label htmlFor="many-colors-input" className="flex flex-col">
        Quantas cores?
        <input
          type="number"
          id="many-colors-input"
          onChange={({ target: { value } }) => {
            setManyColors(Number.parseInt(value, 10));
          }}
        />
      </label>
      <button type="button" onClick={handleNewColorQuantity}>
        Gerar
      </button>
    </div>
  );
}
