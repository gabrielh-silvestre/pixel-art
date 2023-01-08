import { inject, injectable } from "tsyringe";

import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";
import type {
  InputCreateBoardDTO,
  OutputCreateBoardDTO,
} from "./CreateBoard.dto";

import { BoardFactory } from "@domain/board/factory/Board.factory";

import { DATABASE_GATEWAY } from "@constants";

@injectable()
export class CreateBoardUseCase {
  constructor(
    @inject(DATABASE_GATEWAY)
    private readonly databaseGateway: IBoardDatabaseGateway
  ) {}

  private async isTitleAlreadyInUse(title: string): Promise<void | never> {
    const alreadyExists = await this.databaseGateway.existsByTitle(title);
    if (alreadyExists) throw new Error("Board title already in use");
  }

  async execute({
    title,
    proportion,
  }: InputCreateBoardDTO): Promise<OutputCreateBoardDTO | never> {
    await this.isTitleAlreadyInUse(title);

    const newBoard = BoardFactory.create(title, proportion);
    await this.databaseGateway.create(newBoard);

    return newBoard;
  }
}
