import { describe, it, expect, vi, beforeEach, afterEach, Mock } from "vitest";

import type { IHashMap } from "@domain/shared/hash-map/IHashMap.interface";
import type { IPixel } from "../value-object/Pixel/interface";

import { Board } from "./Board";
import { BoardException } from "../exception/Board.exception";

const FAKE_BOARD = {
  id: "fake-id",
  title: "fake-title",
  size: 2,
};

describe("Unit test for Board entity", () => {
  let mockPixels: IHashMap<string, IPixel>;

  beforeEach(() => {
    mockPixels = {
      get: vi.fn(),
      add: vi.fn(),
      size: FAKE_BOARD.size,
    };
  });

  afterEach(() => {
    (mockPixels.get as Mock).mockReset();
    (mockPixels.add as Mock).mockReset();
  });

  it("should create a new Board successfully", () => {
    const board = new Board(
      FAKE_BOARD.id,
      FAKE_BOARD.title,
      FAKE_BOARD.size,
      mockPixels
    );

    expect(board).to.be.instanceOf(Board);
    expect(board.id).to.be.an("string");
    expect(board.title).to.be.eq(FAKE_BOARD.title);
    expect(board.proportion).to.be.eq(FAKE_BOARD.size);
  });

  it("should change the title of the board successfully", () => {
    const board = new Board(
      FAKE_BOARD.id,
      FAKE_BOARD.title,
      FAKE_BOARD.size,
      mockPixels
    );

    const newTitle = "new-title";
    board.changeTitle(newTitle);

    expect(board.title).to.be.eq(newTitle);
  });

  it("should throw an error when trying to change the title of the board with an empty string", () => {
    const board = new Board(
      FAKE_BOARD.id,
      FAKE_BOARD.title,
      FAKE_BOARD.size,
      mockPixels
    );

    const emptyTitle = "";
    expect(() => board.changeTitle(emptyTitle)).to.throw(BoardException);

    const spaceTitle = " ";
    expect(() => board.changeTitle(spaceTitle)).to.throw(BoardException);
  });

  it("should change the proportion of the board successfully", () => {
    const board = new Board(
      FAKE_BOARD.id,
      FAKE_BOARD.title,
      FAKE_BOARD.size,
      mockPixels
    );

    const newProportion = 3;
    board.changeProportion(newProportion);

    expect(board.proportion).to.be.eq(newProportion);
  });

  it("should color a pixel successfully", () => {
    const board = new Board(
      FAKE_BOARD.id,
      FAKE_BOARD.title,
      FAKE_BOARD.size,
      mockPixels
    );

    const pixelId = "fake-pixel-id";
    const newColor = "fake-color";

    const mockPixel = { changeColor: vi.fn() };
    (mockPixels.get as Mock).mockReturnValue(mockPixel);

    board.color(pixelId, newColor);

    expect(mockPixel.changeColor).toBeCalledWith(newColor);
  });

  it("should throw an error when trying to color a pixel that does not exist", () => {
    const board = new Board(
      FAKE_BOARD.id,
      FAKE_BOARD.title,
      FAKE_BOARD.size,
      mockPixels
    );

    const pixelId = "fake-pixel-id";
    const newColor = "fake-color";

    (mockPixels.get as Mock).mockReturnValue(null);

    expect(() => board.color(pixelId, newColor)).to.throw(BoardException);
  });
});
