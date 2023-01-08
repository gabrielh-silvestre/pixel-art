import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";

import { CreateBoardUseCase } from "./CreateBoard.useCase";
import { databaseContainer } from "../../infra/container/board/Database.container";

import { DATABASE_GATEWAY } from "../../utils/constants/inject";

const gateway =
  databaseContainer.resolve<IBoardDatabaseGateway>(DATABASE_GATEWAY);

export const createBoardUseCase = new CreateBoardUseCase(gateway);
