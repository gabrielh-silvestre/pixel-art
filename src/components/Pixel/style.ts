import styled from "styled-components";
import tw from 'tailwind-styled-components';

interface PixelBgProps {
  size: number;
  bgColor: string;
}

const CANVAS_SIZE = 530;

const PixelBg = styled.div<PixelBgProps>`
  width: ${({ size }) => CANVAS_SIZE / size}px;
  height: ${({ size }) => CANVAS_SIZE / size}px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const PixelContainer = tw(PixelBg)`
  border-1
  border-blac
  border-solid
  inline-block
`;
