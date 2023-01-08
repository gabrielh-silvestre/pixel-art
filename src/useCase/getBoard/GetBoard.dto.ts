import { Board } from "@domain/board/entity/Board";

export interface InputGetBoardDTO {
  id: string;
}

export type OutputGetBoardDTO = Board;
