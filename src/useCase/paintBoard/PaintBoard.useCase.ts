import { injectable } from "tsyringe";

import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";
import type { InputPaintBoardDTO } from "./PaintBoard.dto";

@injectable()
export class PaintBoardUseCase {
  constructor(private readonly databaseGateway: IBoardDatabaseGateway) {}

  async execute({
    boardId,
    position: [x, y],
    color,
  }: InputPaintBoardDTO): Promise<void> {
    const board = await this.databaseGateway.getById(boardId);
    if (!board) throw new Error("Board not found");

    board.color([x, y], color);
  }
}
