import tw from 'tailwind-styled-components';

export const SettingsContainer = tw.div`
  flex
  items-end
`;

export const SettingsLabel = tw.label`
  mt-6
  flex
  flex-col
  text-gray-light
  text-xl
  font-lobster
`;

export const SettingsInput = tw.input`
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
