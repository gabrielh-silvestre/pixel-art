import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const settingsContainer = styled.label`
  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

export const SettingsContainer = tw(settingsContainer)`
  p-4

  flex
  items-end
`;

export const SettingsLabel = tw.label`
  flex
  flex-col
  text-gray-light
  text-xl
  font-lobster
`;

export const SettingsInput = tw.input`
  w-full

  h-8
  pl-4
  rounded-md
  text-gray-dark
`;

export const SettinsButton = tw.button`
  ml-2
  py-1
  px-3
  bg-green-dark
  rounded-md
  text-gray-light
  text-lg
  font-robot-condesed
`;
