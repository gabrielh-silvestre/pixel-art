import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";

import { PaintBoardUseCase } from "./PaintBoard.useCase";
import { databaseContainer } from "../../infra/container/board/Database.container";

import { DATABASE_GATEWAY } from "../../utils/constants/inject";

const gateway =
  databaseContainer.resolve<IBoardDatabaseGateway>(DATABASE_GATEWAY);

export const paintBoardUseCase = new PaintBoardUseCase(gateway);
