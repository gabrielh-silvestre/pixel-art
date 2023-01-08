import { container } from "tsyringe";

import type { IBoard } from "@domain/board/entity/Board.interface";

import { BoardDatabaseLocalStorageAdapter } from "@adapter/database/board/localStorage/Database.localStorage.adapter";
import { BoardDatabaseGateway } from "@gateway/database/board/Database.gateway";

import { DATABASE_GATEWAY } from "../../../utils/constants/inject";

const adapter = new BoardDatabaseLocalStorageAdapter<IBoard>('BOARDS');

export const databaseContainer = container.register(DATABASE_GATEWAY, {
  useValue: new BoardDatabaseGateway(adapter),
});
