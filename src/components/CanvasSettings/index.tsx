import { useState } from 'react';

import { useArt } from '../../hooks/useArt';

import {
  SettingsContainer,
  SettingsInput,
  SettingsLabel,
  SettinsButton,
} from './style';

export default function CanvasSettings() {
  const [newSize, setNewSize] = useState(5);
  const { setSize } = useArt();

  const handleNewCanvasSize = () => {
    setSize(newSize);
  };

  return (
    <SettingsContainer>
      <SettingsLabel htmlFor="many-colors-input">
        Quantos quadros?
        <SettingsInput
          type="number"
          id="many-colors-input"
          onChange={({ target: { value } }) => {
            setNewSize(Number.parseInt(value, 10));
          }}
        />
      </SettingsLabel>

      <SettinsButton type="button" onClick={handleNewCanvasSize}>
        Gerar
      </SettinsButton>
    </SettingsContainer>
  );
}
