import tw from 'tailwind-styled-components';

export const Container = tw.section`
  flex-col
  items-center
`;

export const CanvasContainer = tw.div`
  canvas
  rounded-xl
`;

export const Button = tw.button`
  w-full
  mt-4
  py-1
  px-3
  bg-gray-light
  rounded-md
`;
