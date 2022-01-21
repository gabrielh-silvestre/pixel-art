import React from "react";

const getRandomNumber = (): number => Math.floor(Math.random() * 255);

export const getRandomColor = (): string => {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

export const dragPreventDefault = (event: React.DragEvent) => {
  event.preventDefault();
}
