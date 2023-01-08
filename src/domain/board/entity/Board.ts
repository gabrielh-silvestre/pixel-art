import type { IBoard } from "./Board.interface";
import type { IHashMap } from "@domain/shared/hash-map/IHashMap.interface";
import type { IEvent } from "@domain/shared/event/Event.interface";

import { Pixel } from "../value-object/Pixel";
import { BoardException } from "../exception/Board.exception";
import { BoardEventDispatcher } from "../event/dispatch/Board.event.dispatch";

export class Board implements IBoard {
  private readonly _id: string;
  private _title: string;
  private _proportion: number;
  private _pixels: Pixel[][];

  constructor(
    id: string,
    title: string,
    proportion: number,
    pixels: Pixel[][]
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

  get pixels(): Pixel[][] {
    return this._pixels;
  }

  private notify(event: IEvent<IBoard>) {
    return BoardEventDispatcher.init().notify(event);
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

  color(position: [number, number], newColor: string): void {
    const [x, y] = position;
    const foundPixel = this._pixels[x]?.[y];

    if (!foundPixel) throw new BoardException("Pixel not found");

    foundPixel.changeColor(newColor);
  }
}
