import { useState } from 'react';

import { useArt } from '../../hooks/useArt';

import {
  SettingsContainer,
  SettingsInput,
  SettingsLabel,
  SettinsButton,
} from './style';

export default function PalleteSettings() {
  const [manyColors, setManyColors] = useState(0);
  const { setColorQuantity } = useArt();

  const handleNewColorQuantity = () => {
    setColorQuantity(manyColors);
  };

  return (
    <SettingsContainer>
      <SettingsLabel htmlFor="many-colors-input">
        Quantas cores?
        <SettingsInput
          type="number"
          id="many-colors-input"
          onChange={({ target: { value } }) => {
            setManyColors(Number.parseInt(value, 10));
          }}
        />
      </SettingsLabel>

      <SettinsButton type="button" onClick={handleNewColorQuantity}>
        Gerar
      </SettinsButton>
    </SettingsContainer>
  );
}
