import tw from 'tailwind-styled-components';

export const Container = tw.header`
  w-full
  py-4
  bg-green-700
`;

export const ContentContainer = tw.div`
  max-w-screen-xl
  mx-auto
  px-12
  flex
  justify-between
  items-center
  text-3xl
`;

export const Navigation = tw.nav`
  text-lg
`;

export const NavLinks = tw.a`
  mr-6
`;
