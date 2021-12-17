import tw from 'tailwind-styled-components';

export const Container = tw.header`
  w-full
  py-4
  bg-green-dark
  text-gray-light

  cursor-default
`;

  export const ContentContainer = tw.div`
  max-w-screen-xl
  mx-auto
  px-24
  flex
  justify-between
  items-center
  font-lobster
  text-4xl
`;

export const Navigation = tw.nav`
  text-xl
  font-robot-condesed
`;

export const NavLinks = tw.a`
  mr-6
`;
