import type { IHashMap } from "@domain/shared/hash-map/IHashMap.interface";
import type { IPixel } from "../value-object/Pixel/interface";

export interface IBoard {
  get id(): string;
  get title(): string;
  get proportion(): number;
  get pixels(): IHashMap<string, IPixel>;

  changeTitle(title: string): void;
  changeProportion(proportion: number): void;
  color(pixelId: string, newColor: string): void;
}
