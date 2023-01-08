import { SpyInstance } from "vitest";

import { Board } from "./Board";
import { Pixel } from "../value-object/Pixel";
import { BoardException } from "../exception/Board.exception";

import { BOARDS } from "@mocks/boards.mock";

const FAKE_BOARD = {
  id: "fake-id",
  title: "fake-title",
  size: 2,
};

describe("Unit test for Board entity", () => {
  let mockPixels: Pixel[][] = BOARDS[0].pixels;
  let spyChangeColor: SpyInstance;

  beforeEach(() => {
    spyChangeColor = vi.spyOn(BOARDS[0].pixels[0][0], 'changeColor');
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

    const newColor = "#131313";

    board.color([0, 0], newColor);

    expect(spyChangeColor).toBeCalledWith(newColor);
  });

  it("should throw an error when trying to color a pixel that does not exist", () => {
    const board = new Board(
      FAKE_BOARD.id,
      FAKE_BOARD.title,
      FAKE_BOARD.size,
      mockPixels
    );

    const newColor = "fake-color";

    expect(() => board.color([10, 0], newColor)).to.throw(BoardException);
  });
});
