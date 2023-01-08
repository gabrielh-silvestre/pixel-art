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

  private static createPixelsFrom(pixels: Pixel[][]): Pixel[][] {
    const newPixels: Pixel[][] = [];

    for (let x = 0; x < pixels.length; x++) {
      for (let y = 0; y < pixels[x].length; y++) {
        const { color } = pixels[x][y];

        const pixel = new Pixel(color, x, y);

        if (!newPixels[x]) newPixels[x] = [];
        newPixels[x][y] = pixel;
      }
    }

    return newPixels;
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
      this.createPixelsFrom(board.pixels)
    );

    return newBoard;
  }
}
