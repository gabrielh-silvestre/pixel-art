import { Board } from "../entity/Board";
import { BoardFactory } from "./Board.factory";

import { BOARDS } from "@mocks/boards.mock";

describe("Unit test for BoardFactory", () => {
  it("should create a new Board successfully", () => {
    const board = BoardFactory.create("Board 1", 5);

    expect(board).to.be.instanceOf(Board);
    expect(board.pixels).to.be.instanceOf(Array);

    expect(board.title).to.be.eq("Board 1");
    expect(board.pixels.length).to.be.eq(5);
  });

  it("should create a new Board from an existing one successfully", () => {
    const [board] = BOARDS;

    const newBoard = BoardFactory.createFrom(board);

    expect(newBoard).to.be.instanceOf(Board);
    expect(newBoard.pixels).to.be.instanceOf(Array);

    expect(newBoard.title).to.be.eq("Board 1");
    expect(newBoard.pixels.length).to.be.eq(5);
  });
});
