import tw from 'tailwind-styled-components';

export const Container = tw.section`
  flex-col
  items-center
`;

export const CanvasContainer = tw.div`
  rounded-xl

  overflow-hidden
`;

export const Button = tw.button`
  w-full
  mt-4
  py-1
  px-3
  bg-green-dark
  rounded-md

  text-gray-light
  text-lg

  font-robot-condesed

  filter
  transition-all
  duration-300

  hover:brightness-75
`;
