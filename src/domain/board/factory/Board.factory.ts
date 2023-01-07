import { v4 as uuid } from "uuid";

import type { IBoard } from "../entity/Board.interface";
import type { IPixel } from "../value-object/Pixel/interface";

import { Board } from "../entity/Board";
import { Pixel } from "../value-object/Pixel";
import { HashMap } from "@domain/shared/hash-map/HashMap";

export class BoardFactory {
  private static createPixels(proportion: number): HashMap<string, IPixel> {
    const pixels = new HashMap<string, IPixel>(proportion * proportion);

    for (let x = 0; x < proportion; x++) {
      for (let y = 0; y < proportion; y++) {
        const pixel = new Pixel("#ffffff", x, y);
        pixels.add(pixel.id, pixel);
      }
    }

    return pixels;
  }

  static create(title: string, proportion: number): IBoard {
    const pixels = this.createPixels(proportion);

    const newBoard = new Board(uuid(), title, proportion, pixels);

    return newBoard;
  }
}
