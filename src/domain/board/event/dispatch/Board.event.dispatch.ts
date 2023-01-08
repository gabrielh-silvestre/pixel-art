import type { IBoard } from "@domain/board/entity/Board.interface";

import { EventDispatcher } from "@domain/shared/event/EventDispatcher";

export class BoardEventDispatcher extends EventDispatcher<IBoard> {
  static instance: BoardEventDispatcher;

  private constructor() {
    super();
  }

  static init(): BoardEventDispatcher {
    if (!BoardEventDispatcher.instance) {
      BoardEventDispatcher.instance = new BoardEventDispatcher();
    }

    return BoardEventDispatcher.instance;
  }
}
