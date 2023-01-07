import type { IPixel } from "./interface";

import { PixelException } from "./exception";

export class Pixel implements IPixel {
  private readonly _id: string;
  private _color: string;
  private readonly _x: number;
  private readonly _y: number;

  constructor(color: string, x: number, y: number) {
    this._id = `${x}-${y}`;
    this._color = color;
    this._x = x;
    this._y = y;
  }

  get id(): string {
    return this._id;
  }

  get color(): string {
    return this._color;
  }

  get position(): [number, number] {
    return [this._x, this._y];
  }

  changeColor(color: string): void {
    const isValidColor = /^#[0-9A-F]{6}$/i.test(color);

    if (!isValidColor) throw new PixelException("Invalid color");
    if (color === this._color) return;

    this._color = color;
  }
}
