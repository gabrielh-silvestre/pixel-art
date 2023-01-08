import type { IEventDispatcher } from "./EventDispatcher.interface";

import { EventDispatcher } from "./EventDispatcher";
import { IEvent } from "./Event.interface";

class TestEventDispatcher extends EventDispatcher<string> {}

describe("Unit test for EventDispatcher", () => {
  let eventDispatcher: IEventDispatcher<string>;

  beforeEach(() => {
    eventDispatcher = new TestEventDispatcher();
  });

  it("should be defined", () => {
    expect(eventDispatcher).toBeDefined();
  });

  it("should be able to register and notify", async () => {
    const event: IEvent<string> = {
      name: "test-event",
      payload: "Trem",
      occurredAt: new Date(),
    };
    const handler = {
      handle: vi.fn(),
      isSameAs: vi.fn(),
    };

    await eventDispatcher.register(event, handler);
    await eventDispatcher.notify(event);

    expect(handler.handle).toBeCalled();
  });

  it("should be able to unregister", async () => {
    const event: IEvent<string> = {
      name: "test-event",
      payload: "Trem",
      occurredAt: new Date(),
    };
    const handler = {
      handle: vi.fn(),
      isSameAs: vi.fn().mockResolvedValue(true),
    };

    await eventDispatcher.register(event, handler);
    await eventDispatcher.unregister(event, handler);
    await eventDispatcher.notify(event);

    expect(handler.handle).not.toBeCalled();
  });

  it("should be able to unregister all", async () => {
    const event: IEvent<string> = {
      name: "test-event",
      payload: "Trem",
      occurredAt: new Date(),
    };
    const handler = {
      handle: vi.fn(),
      isSameAs: vi.fn(),
    };

    await eventDispatcher.register(event, handler);
    await eventDispatcher.unregisterAll(event);
    await eventDispatcher.notify(event);

    expect(handler.handle).not.toBeCalled();
  });

  it("should be able to register and notify multiple handlers", async () => {
    const event: IEvent<string> = {
      name: "test-event",
      payload: "Trem",
      occurredAt: new Date(),
    };
    const handler1 = {
      handle: vi.fn(),
      isSameAs: vi.fn(),
    };
    const handler2 = {
      handle: vi.fn(),
      isSameAs: vi.fn(),
    };

    await eventDispatcher.register(event, handler1);
    await eventDispatcher.register(event, handler2);
    await eventDispatcher.notify(event);

    expect(handler1.handle).toBeCalled();
    expect(handler2.handle).toBeCalled();
  });
});
