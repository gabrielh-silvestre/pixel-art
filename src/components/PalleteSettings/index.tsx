import { useState } from 'react';

import { useArt } from '../../hooks/useArt';

import {
  SettingsContainer,
  SettingsInput,
  SettingsLabel,
  SettinsButton,
} from './style';

const MIN_COLORS_NUMBER = 4;
const MAX_COLORS_NUMBER = 64;

export default function PalleteSettings() {
  const [manyColors, setManyColors] = useState(16);
  const { setColorQuantity } = useArt();

  const handleNewColorQuantity = () => {
    setColorQuantity(manyColors);
  };

  const handleColorsQuantity = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(value) > MAX_COLORS_NUMBER) {
      setManyColors(MAX_COLORS_NUMBER);
    } else if (Number(value) < MIN_COLORS_NUMBER) {
      setManyColors(MIN_COLORS_NUMBER);
    } else {
      setManyColors(Number.parseInt(value, 10));
    }
  };

  const handleUserType = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') setColorQuantity(manyColors);
  };

  return (
    <SettingsContainer>
      <SettingsLabel htmlFor="many-colors-input">
        Quantas cores?
        <SettingsInput
          type="number"
          id="many-colors-input"
          value={manyColors}
          onChange={handleColorsQuantity}
          onKeyUp={handleUserType}
        />
      </SettingsLabel>

      <SettinsButton type="button" onClick={handleNewColorQuantity}>
        Gerar
      </SettinsButton>
    </SettingsContainer>
  );
}
