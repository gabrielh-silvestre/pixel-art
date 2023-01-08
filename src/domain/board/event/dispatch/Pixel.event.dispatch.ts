import type { IPixel } from "@domain/board/value-object/Pixel/interface";

import { EventDispatcher } from "@domain/shared/event/EventDispatcher";

export class PixelEventDispatcher extends EventDispatcher<IPixel> {
  static instance: PixelEventDispatcher;

  private constructor() {
    super();
  }

  static init(): PixelEventDispatcher {
    if (!PixelEventDispatcher.instance) {
      PixelEventDispatcher.instance = new PixelEventDispatcher();
    }

    return PixelEventDispatcher.instance;
  }
}
