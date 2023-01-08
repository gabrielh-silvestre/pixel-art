import { BoardFactory } from "@domain/board/factory/Board.factory";

export const BOARDS = [
  BoardFactory.create("Board 1", 5),
  BoardFactory.create("Board 2", 15),
  BoardFactory.create("Board 3", 3),
  BoardFactory.create("Board 4", 51),
];

export const NEW_BOARD = BoardFactory.create("New Board", 1);
