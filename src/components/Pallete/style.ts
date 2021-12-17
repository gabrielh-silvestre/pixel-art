import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ContainerScroll = styled.section`
  -ms-overflow-style: none; 
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = tw(ContainerScroll)`
  w-64
  min-h-0
  max-h-64
  p-4
  flex
  flex-wrap
  justify-center
  bg-gray-light
  rounded-xl
  overflow-y-auto
`;
