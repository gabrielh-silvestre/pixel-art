import type { IBoard } from "@domain/board/entity/Board.interface";
import type { IDatabaseAdapter } from "@adapter/database/Database.adapter.interface";

import { BoardDatabaseMemoryAdapter } from "./Database.memory.adapter";

import { BOARDS, NEW_BOARD } from "@mocks/boards.mock";

describe("Unit test for BoardDatabaseMemoryAdapter", () => {
  let databaseAdapter: IDatabaseAdapter<IBoard>;

  beforeEach(() => {
    BoardDatabaseMemoryAdapter.reset(BOARDS);

    databaseAdapter = new BoardDatabaseMemoryAdapter();
  });

  it('should get a board by "id"', async () => {
    const [board] = BOARDS;
    const foundBoard = await databaseAdapter.getOne({ id: board.id });

    expect(foundBoard).to.be.not.null;
  });

  it("should get all boards", async () => {
    const boards = await databaseAdapter.getAll();

    expect(boards).to.be.length(BOARDS.length);
  });

  it("should save a board", async () => {
    await databaseAdapter.save(NEW_BOARD);

    const board = await databaseAdapter.getOne({ id: NEW_BOARD.id });
    expect(board).to.be.not.null;

    const boards = await databaseAdapter.getAll();
    expect(boards).to.be.length(BOARDS.length + 1);
  });

  it("should update a board", async () => {
    const [boardToUpdate] = BOARDS;
    boardToUpdate.changeTitle("Updated Board");

    await databaseAdapter.update(boardToUpdate.id, boardToUpdate);

    const board = await databaseAdapter.getOne({ id: boardToUpdate.id });

    expect(board).to.be.not.null;
    expect(board?.title).to.be.equal("Updated Board");
  });

  it("should delete a board", async () => {
    const [boardToDelete] = BOARDS;

    await databaseAdapter.delete(boardToDelete.id);

    const board = await databaseAdapter.getOne({ id: boardToDelete.id });
    expect(board).to.be.null;
  });
});
