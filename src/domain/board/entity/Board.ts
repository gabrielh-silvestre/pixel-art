import type { IBoard } from "./Board.interface";
import type { IPixel } from "../value-object/Pixel/interface";
import type { IHashMap } from "@domain/shared/hash-map/IHashMap.interface";

import { BoardException } from "../exception/Board.exception";

export class Board implements IBoard {
  private readonly _id: string;
  private _title: string;
  private _proportion: number;
  private _pixels: IHashMap<string, IPixel>;

  constructor(
    id: string,
    title: string,
    proportion: number,
    pixels: IHashMap<string, IPixel>
  ) {
    this._id = id;
    this._title = title;
    this._proportion = proportion;
    this._pixels = pixels;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get proportion(): number {
    return this._proportion;
  }

  get pixels(): IHashMap<string, IPixel> {
    return this._pixels;
  }

  changeTitle(title: string): void {
    const isEmpty = title.trim().length === 0;
    if (isEmpty) throw new BoardException("Title cannot be empty");

    const isTheSame = title === this._title;
    if (isTheSame) throw new BoardException("Title cannot be the same");

    this._title = title;
  }

  changeProportion(proportion: number): void {
    this._proportion = proportion;
  }

  color(pixelId: string, newColor: string): void {
    const foundPixel = this._pixels.get(pixelId);

    if (!foundPixel) throw new BoardException("Pixel not found");

    foundPixel.changeColor(newColor);
  }
}
