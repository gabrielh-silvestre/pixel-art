const getRandomNumber = (): number => Math.floor(Math.random() * 255);

export const getRandomColor = (): string => {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};
