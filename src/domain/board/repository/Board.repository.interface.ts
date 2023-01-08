import type { IBoard } from "../entity/Board.interface";

import { Board } from "../entity/Board";

export interface IBoardRepository {
  getById(id: string): Promise<Board | null>;
  getAll(): Promise<Board[]>;
  existsByTitle(title: string): Promise<boolean>;
  create(board: IBoard): Promise<void>;
  update(board: IBoard): Promise<void>;
  delete(id: string): Promise<void>;
}
