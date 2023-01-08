import { v4 as uuid } from "uuid";

import type { IBoard } from "../entity/Board.interface";

import { Board } from "../entity/Board";
import { Pixel } from "../value-object/Pixel";
import { HashMap } from "@domain/shared/hash-map/HashMap";

export class BoardFactory {
  private static createPixels(proportion: number): HashMap<string, Pixel> {
    const pixels = new HashMap<string, Pixel>(proportion * proportion);

    for (let x = 0; x < proportion; x++) {
      for (let y = 0; y < proportion; y++) {
        const pixel = new Pixel("#ffffff", x, y);
        pixels.add(pixel.id, pixel);
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
