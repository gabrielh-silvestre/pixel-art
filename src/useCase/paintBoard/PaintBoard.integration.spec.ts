import type { IBoard } from "@domain/board/entity/Board.interface";
import type { IDatabaseAdapter } from "@adapter/database/Database.adapter.interface";
import type { IBoardDatabaseGateway } from "@gateway/database/board/Database.gateway.interface";

import { PixelEventDispatcher } from "@domain/board/event/dispatch/Pixel.event.dispatch";

import { BoardDatabaseMemoryAdapter } from "@adapter/database/board/memory/Database.memory.adapter";
import { BoardDatabaseGateway } from "@gateway/database/board/Database.gateway";
import { PaintBoardUseCase } from "./PaintBoard.useCase";

import { BOARDS } from "@mocks/boards.mock";

describe("Integration test for PaintBoardUseCase", () => {
  let databaseAdapter: IDatabaseAdapter<IBoard>;
  let databaseGateway: IBoardDatabaseGateway;
  let paintBoardUseCase: PaintBoardUseCase;

  let spyNotify = vi.spyOn(PixelEventDispatcher.prototype, "notify");

  beforeEach(() => {
    BoardDatabaseMemoryAdapter.reset(BOARDS);

    databaseAdapter = new BoardDatabaseMemoryAdapter();
    databaseGateway = new BoardDatabaseGateway(databaseAdapter);
    paintBoardUseCase = new PaintBoardUseCase(databaseGateway);
  });

  it("should paint the board", async () => {
    const [board] = BOARDS;

    await paintBoardUseCase.execute({
      boardId: board.id,
      position: [0, 0],
      color: "#313131",
    });

    expect(spyNotify).toHaveBeenCalled();
  });
});
