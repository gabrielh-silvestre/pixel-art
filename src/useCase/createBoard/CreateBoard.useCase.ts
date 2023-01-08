import { inject, injectable } from "tsyringe";

import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";
import type {
  InputCreateBoardDTO,
  OutputCreateBoardDTO,
} from "./CreateBoard.dto";

import { BoardFactory } from "@domain/board/factory/Board.factory";

import { DATABASE_GATEWAY } from "../../utils/constants/inject";

@injectable()
export class CreateBoardUseCase {
  constructor(
    @inject(DATABASE_GATEWAY)
    private readonly databaseGateway: IBoardDatabaseGateway
  ) {}

  async execute({
    title,
    proportion,
  }: InputCreateBoardDTO): Promise<OutputCreateBoardDTO | never> {
    const newBoard = BoardFactory.create(title, proportion);

    await this.databaseGateway.create(newBoard);

    return newBoard;
  }
}
