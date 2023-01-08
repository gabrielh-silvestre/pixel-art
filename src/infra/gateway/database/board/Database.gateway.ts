import { inject, injectable } from "tsyringe";

import type { IBoard } from "@domain/board/entity/Board.interface";
import type { IDatabaseAdapter } from "@adapter/database/Database.adapter.interface";
import type { IBoardDatabaseGateway } from "./Database.gateway.interface";

import { Board } from "@domain/board/entity/Board";
import { BoardFactory } from "@domain/board/factory/Board.factory";

import { DATABASE_ADAPTER } from "@constants";

@injectable()
export class BoardDatabaseGateway implements IBoardDatabaseGateway {
  constructor(
    @inject(DATABASE_ADAPTER)
    private readonly databaseAdapter: IDatabaseAdapter<IBoard>
  ) {}

  private static mapToDomain(board: IBoard): Board {
    return BoardFactory.createFrom(board);
  }

  async getById(id: string): Promise<Board | null> {
    const foundBoard = await this.databaseAdapter.getOne({ id });

    if (!foundBoard) return null;

    return BoardDatabaseGateway.mapToDomain(foundBoard);
  }

  async getAll(): Promise<Board[]> {
    return (await this.databaseAdapter.getAll()).map(
      BoardDatabaseGateway.mapToDomain
    );
  }

  async existsByTitle(title: string): Promise<boolean> {
    const foundBoard = await this.databaseAdapter.getOne({ title });

    return !!foundBoard;
  }

  create(board: IBoard): Promise<void> {
    return this.databaseAdapter.save(board);
  }

  update(board: IBoard): Promise<void> {
    return this.databaseAdapter.update(board.id, board);
  }

  delete(id: string): Promise<void> {
    return this.databaseAdapter.delete(id);
  }
}
