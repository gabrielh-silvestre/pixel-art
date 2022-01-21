import React, { useState } from 'react';

import { useArt } from '../../hooks/useArt';

import {
  SettingsContainer,
  SettingsLabel,
  SettingsInput,
  SettinsButton,
} from './style';

interface SettingsProps {
  label: string;
  initialQuatity: number;
  minValue: number;
  maxValue: number;
  settingType: 'pallete' | 'canvas';
}

export function Settings(props: SettingsProps) {
  const [quatity, setQuatity] = useState(props.initialQuatity);
  const { setColorQuantity, setSize } = useArt();

  const applyQuantity = () => {
    props.settingType === 'pallete'
      ? setColorQuantity(quatity)
      : setSize(quatity);
  };

  const handleQuantity = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { minValue: MIN_QUANTITY, maxValue: MAX_QUANTITY } = props;

    if (Number(value) > MAX_QUANTITY) {
      setQuatity(MAX_QUANTITY);
    } else if (Number(value) < MIN_QUANTITY) {
      setQuatity(MIN_QUANTITY);
    } else {
      setQuatity(Number.parseInt(value, 10));
    }
  };

  const handleUserType = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      props.settingType === 'pallete'
        ? setColorQuantity(quatity)
        : setSize(quatity);
    }
  };

  return (
    <SettingsContainer>
      <SettingsLabel htmlFor="many-colors-input">
        {props.label}
        <SettingsInput
          type="number"
          id="many-colors-input"
          value={quatity}
          onChange={handleQuantity}
          onKeyUp={handleUserType}
        />
      </SettingsLabel>

      <SettinsButton type="button" onClick={applyQuantity}>
        Gerar
      </SettinsButton>
    </SettingsContainer>
  );
}
