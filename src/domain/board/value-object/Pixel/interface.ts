export interface IPixel {
  get id(): string;
  get color(): string;
  get position(): [number, number];

  changeColor(color: string): void;
}
