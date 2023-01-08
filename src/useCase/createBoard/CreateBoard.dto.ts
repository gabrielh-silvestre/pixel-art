import { Board } from "@domain/board/entity/Board";

export interface InputCreateBoardDTO {
  title: string;
  proportion: number;
}

export type OutputCreateBoardDTO = Board;
