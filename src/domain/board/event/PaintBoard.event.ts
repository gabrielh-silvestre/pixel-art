import type { IEvent } from "@domain/shared/event/Event.interface";
import type { IPixel } from "../value-object/Pixel/interface";

export class PaintBoardEvent implements IEvent<IPixel> {
  private readonly _name = "paint-board";
  private readonly _payload: IPixel;
  private readonly _occurredAt: Date;

  constructor(payload: IPixel) {
    this._payload = payload;
    this._occurredAt = new Date();
  }

  get name(): string {
    return this._name;
  }

  get payload(): IPixel {
    return this._payload;
  }

  get occurredAt(): Date {
    return this._occurredAt;
  }
}
