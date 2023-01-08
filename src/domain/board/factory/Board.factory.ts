import { v4 as uuid } from "uuid";

import type { IBoard } from "../entity/Board.interface";

import { Board } from "../entity/Board";
import { Pixel } from "../value-object/Pixel";

export class BoardFactory {
  private static createPixels(proportion: number): Pixel[][] {
    const pixels: Pixel[][] = [];

    for (let x = 0; x < proportion; x++) {
      for (let y = 0; y < proportion; y++) {
        const pixel = new Pixel("#ffffff", x, y);

        if (!pixels[x]) pixels[x] = [];
        pixels[x][y] = pixel;
      }
    }

    return pixels;
  }

  static create(title: string, proportion: number): Board {
    const pixels = this.createPixels(proportion);

    const newBoard = new Board(uuid(), title, proportion, pixels);

    return newBoard;
  }

  static createFrom(board: IBoard): Board {
    const newBoard = new Board(
      board.id,
      board.title,
      board.proportion,
      board.pixels
    );

    return newBoard;
  }
}
