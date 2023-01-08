import { inject, injectable } from "tsyringe";

import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";
import type { InputGetBoardDTO, OutputGetBoardDTO } from "./GetBoard.dto";

import { DATABASE_GATEWAY } from "../../utils/constants/inject";

@injectable()
export class GetBoardUseCase {
  constructor(
    @inject(DATABASE_GATEWAY)
    private readonly databaseGateway: IBoardDatabaseGateway
  ) {}

  async execute({ id }: InputGetBoardDTO): Promise<OutputGetBoardDTO | never> {
    const foundBoard = await this.databaseGateway.getById(id);
    if (!foundBoard) throw new Error("Board not found");

    return foundBoard;
  }
}
