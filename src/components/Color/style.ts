import styled from 'styled-components';
import tw from 'tailwind-styled-components';

interface ColorProps {
  bgColor: string;
}

const ColorBg = styled.div<ColorProps>`
  background-color: ${({ bgColor }) => bgColor};
`;

export const ColorContainer = tw(ColorBg)`
  w-12
  h-12
  mx-1
  rounded-full
  shadow
`;
