import { useState } from 'react';

import { useArt } from '../../hooks/useArt';

import {
  SettingsContainer,
  SettingsInput,
  SettingsLabel,
  SettinsButton,
} from './style';

const MAX_CANVAS_SIZE = 70;
const MIN_CANVAS_SIZE = 5;

export default function CanvasSettings() {
  const [newSize, setNewSize] = useState(5);
  const { setSize } = useArt();

  const handleNewCanvasSize = () => {
    setSize(newSize);
  };

  const handleCanvasSize = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(value) > MAX_CANVAS_SIZE) {
      setNewSize(MAX_CANVAS_SIZE);
    } else if (Number(value) < MIN_CANVAS_SIZE) {
      setNewSize(MIN_CANVAS_SIZE);
    } else {
      setNewSize(Number.parseInt(value, 10));
    }
  };

  return (
    <SettingsContainer>
      <SettingsLabel htmlFor="many-colors-input">
        Quantos quadros?
        <SettingsInput
          type="number"
          id="many-colors-input"
          value={newSize}
          onChange={handleCanvasSize}
        />
      </SettingsLabel>

      <SettinsButton type="button" onClick={handleNewCanvasSize}>
        Gerar
      </SettinsButton>
    </SettingsContainer>
  );
}
