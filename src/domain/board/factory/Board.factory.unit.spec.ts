import { describe, it, expect } from "vitest";

import { Board } from "../entity/Board";
import { BoardFactory } from "./Board.factory";

import { HashMap } from "@domain/shared/hash-map/HashMap";

import { BOARDS } from "@mocks/boards.mock";

describe("Unit test for BoardFactory", () => {
  it("should create a new Board successfully", () => {
    const board = BoardFactory.create("Board 1", 5);

    expect(board).to.be.instanceOf(Board);
    expect(board.pixels).to.be.instanceOf(HashMap);

    expect(board.title).to.be.eq("Board 1");
    expect(board.pixels.size).to.be.eq(25);
  });

  it("should create a new Board from an existing one successfully", () => {
    const [board] = BOARDS;

    const newBoard = BoardFactory.createFrom(board);

    expect(newBoard).to.be.instanceOf(Board);
    expect(newBoard.pixels).to.be.instanceOf(HashMap);

    expect(newBoard.title).to.be.eq("Board 1");
    expect(newBoard.pixels.size).to.be.eq(25);
  });
});
