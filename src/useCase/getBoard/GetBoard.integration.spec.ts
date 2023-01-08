import type { IBoard } from "@domain/board/entity/Board.interface";
import type { IDatabaseAdapter } from "@adapter/database/Database.adapter.interface";
import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";

import { BoardDatabaseMemoryAdapter } from "@adapter/database/board/memory/Database.memory.adapter";
import { BoardDatabaseGateway } from "@gateway/database/board/Database.gateway";
import { GetBoardUseCase } from "./GetBoard.useCase";

import { BOARDS } from "@mocks/boards.mock";

describe("Integration test for GetBoardUseCase", () => {
  let databaseAdapter: IDatabaseAdapter<IBoard>;
  let databaseGateway: IBoardDatabaseGateway;
  let getBoardUseCase: GetBoardUseCase;

  beforeEach(() => {
    BoardDatabaseMemoryAdapter.reset(BOARDS);

    databaseAdapter = new BoardDatabaseMemoryAdapter();
    databaseGateway = new BoardDatabaseGateway(databaseAdapter);
    getBoardUseCase = new GetBoardUseCase(databaseGateway);
  });

  it("should get a board by id", async () => {
    const [{ id }] = BOARDS;

    const foundBoard = await getBoardUseCase.execute({ id });

    expect(foundBoard).to.be.not.null;
  });

  it("should throw an error if the board id is not found", async () => {
    const id = "not-found-id";

    await expect(() => getBoardUseCase.execute({ id })).rejects.toThrow(
      "Board not found"
    );
  });
});
