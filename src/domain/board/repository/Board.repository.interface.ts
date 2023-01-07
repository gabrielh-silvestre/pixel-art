import type { IBoard } from "../entity/Board.interface";

export interface IBoardRepository {
  get(id: string): Promise<IBoard>;
  getAll(): Promise<IBoard[]>;
  create(board: IBoard): void;
  update(board: IBoard): void;
  delete(id: string): void;
}
