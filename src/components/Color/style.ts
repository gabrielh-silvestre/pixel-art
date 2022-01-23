import styled from 'styled-components';
import tw from 'tailwind-styled-components';

interface ColorProps {
  bgColor: string;
  $isSelected: boolean;
}

const ColorBg = styled.div<ColorProps>`
  background-color: ${({ bgColor }) => bgColor};
  border-color: ${({ bgColor }) => bgColor};
`;

export const ColorContainer = tw(ColorBg)`
  w-12
  h-12
  m-1
  rounded-full
  shadow

  filter
  transition-all
  duration-200
  ${({ $isSelected }) => $isSelected ? 'ring-4' : 'ring-0'}

  hover:border-8
  hover:bg-gray-light
`;
