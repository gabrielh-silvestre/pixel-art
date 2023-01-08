import type { IEvent } from "./Event.interface";
import type { IEventDispatcher } from "./EventDispatcher.interface";
import type { IEventHandler } from "./EventHandler.interface";

export abstract class EventDispatcher<T> implements IEventDispatcher<T> {
  private handlers: Map<IEvent<T>, IEventHandler<T>[]>;

  constructor() {
    this.handlers = new Map();
  }

  async notify(event: IEvent<T>): Promise<void> {
    const handlers = this.handlers.get(event);
    if (!handlers) {
      return;
    }

    handlers.forEach((handler) => handler.handle(event));
  }

  async register(event: IEvent<T>, handler: IEventHandler<T>): Promise<void> {
    const handlers = this.handlers.get(event);
    if (!handlers) {
      this.handlers.set(event, [handler]);
      return;
    }

    this.handlers.set(event, [...handlers, handler]);
  }

  async unregister(event: IEvent<T>, handler: IEventHandler<T>): Promise<void> {
    const handlers = this.handlers.get(event);
    if (!handlers) {
      return;
    }

    this.handlers.set(
      event,
      handlers.filter((h) => !h.isSameAs(handler))
    );
  }

  async unregisterAll(event: IEvent<T>): Promise<void> {
    this.handlers.delete(event);
  }
}
