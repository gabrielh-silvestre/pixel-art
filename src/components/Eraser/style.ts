import tw from 'tailwind-styled-components';

export const EraserButton = tw.button<{ $isSelected: boolean }>`
  w-32
  h-10
  mt-8
  bg-green-dark
  rounded-md

  hover:opacity-90
  transition-opacity
  duration-200
  ${({ $isSelected }) => $isSelected ? 'ring-4' : 'ring-0'}

  text-gray-light
  text-lg
  font-robot-condesed
`;
