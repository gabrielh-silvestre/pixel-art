import type { IHashMap } from "@domain/shared/hash-map/IHashMap.interface";

import { Pixel } from "../value-object/Pixel";

export interface IBoard {
  get id(): string;
  get title(): string;
  get proportion(): number;
  get pixels(): Pixel[][];
}
