import type { IBoard } from "@domain/board/entity/Board.interface";
import type { IDatabaseAdapter } from "@adapter/database/Database.adapter.interface";
import type { IBoardDatabaseGateway } from "./Database.gateway.interface";

import { BoardDatabaseMemoryAdapter } from "@adapter/database/board/memory/Database.memory.adapter";
import { BoardDatabaseGateway } from "./Database.gateway";

import { BOARDS, NEW_BOARD } from "@mocks/boards.mock";

describe("Integration test for BoardDatabaseGateway", () => {
  let databaseAdapter: IDatabaseAdapter<IBoard>;
  let databaseGateway: IBoardDatabaseGateway;

  beforeEach(() => {
    BoardDatabaseMemoryAdapter.reset(BOARDS);

    databaseAdapter = new BoardDatabaseMemoryAdapter();
    databaseGateway = new BoardDatabaseGateway(databaseAdapter);
  });

  it('should get a board by "id"', async () => {
    const [board] = BOARDS;
    const foundBoard = await databaseGateway.getById(board.id);

    expect(foundBoard).to.be.not.null;
  });

  it("should get all boards", async () => {
    const boards = await databaseGateway.getAll();

    expect(boards).to.be.length(BOARDS.length);
  });

  it("should save a board", async () => {
    await databaseGateway.create(NEW_BOARD);

    const board = await databaseGateway.getById(NEW_BOARD.id);
    expect(board).to.be.not.null;

    const boards = await databaseGateway.getAll();
    expect(boards).to.be.length(BOARDS.length + 1);
  });

  it("should update a board", async () => {
    const [boardToUpdate] = BOARDS;
    boardToUpdate.changeTitle("Updated Board");

    await databaseGateway.update(boardToUpdate);

    const board = await databaseGateway.getById(boardToUpdate.id);
    expect(board).to.be.not.null;
    expect(board?.title).to.be.equal("Updated Board");
  });

  it("should delete a board", async () => {
    const [boardToDelete] = BOARDS;

    await databaseGateway.delete(boardToDelete.id);

    const board = await databaseGateway.getById(NEW_BOARD.id);
    expect(board).to.be.null;

    const boards = await databaseGateway.getAll();
    expect(boards).to.be.length(BOARDS.length - 1);
  });
});
