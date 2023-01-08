import type { IEvent } from "./Event.interface";
import type { IEventHandler } from "./EventHandler.interface";

export interface IEventDispatcher<T> {
  notify(event: IEvent<T>): Promise<void>;
  register(event: IEvent<T>, handler: IEventHandler<T>): Promise<void>;
  unregister(event: IEvent<T>, handler: IEventHandler<T>): Promise<void>;
  unregisterAll(event: IEvent<T>): Promise<void>;
}
