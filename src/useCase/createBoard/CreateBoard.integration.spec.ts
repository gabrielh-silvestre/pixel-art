import { IBoard } from "@domain/board/entity/Board.interface";
import { IDatabaseAdapter } from "@adapter/database/Database.adapter.interface";
import { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";

import { BoardDatabaseMemoryAdapter } from "@adapter/database/board/memory/Database.memory.adapter";
import { BoardDatabaseGateway } from "@gateway/database/board/Database.gateway";
import { CreateBoardUseCase } from "./CreateBoard.useCase";

import { BOARDS } from "@mocks/boards.mock";

describe("Integration test for CreateBoardUseCase", () => {
  let databaseAdapter: IDatabaseAdapter<IBoard>;
  let databaseGateway: IBoardDatabaseGateway;
  let createBoardUseCase: CreateBoardUseCase;

  beforeEach(() => {
    BoardDatabaseMemoryAdapter.reset(BOARDS);

    databaseAdapter = new BoardDatabaseMemoryAdapter();
    databaseGateway = new BoardDatabaseGateway(databaseAdapter);
    createBoardUseCase = new CreateBoardUseCase(databaseGateway);
  });

  it("should create a new board", async () => {
    const newBoard = await createBoardUseCase.execute({
      title: "New Board",
      proportion: 1,
    });

    expect(newBoard).to.be.not.null;
    expect(newBoard?.title).to.be.equal("New Board");
    expect(newBoard?.proportion).to.be.equal(1);

    const boards = await databaseGateway.getAll();
    expect(boards).to.be.length(BOARDS.length + 1);
  });
});
