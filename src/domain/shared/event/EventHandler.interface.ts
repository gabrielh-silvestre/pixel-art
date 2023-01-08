import type { IEvent } from "./Event.interface";

export interface IEventHandler<T> {
  handle(event: IEvent<T>): Promise<void>;
  isSameAs(handler: IEventHandler<T>): boolean;
}
