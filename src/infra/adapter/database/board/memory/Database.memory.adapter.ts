import { injectable } from "tsyringe";

import type { IBoard } from "@domain/board/entity/Board.interface";
import type { IDatabaseAdapter } from "@adapter/database/Database.adapter.interface";

@injectable()
export class BoardDatabaseMemoryAdapter implements IDatabaseAdapter<IBoard> {
  private static readonly ITEMS: any[] = [];

  static reset(boards: IBoard[]): void {
    BoardDatabaseMemoryAdapter.ITEMS.length = 0;
    BoardDatabaseMemoryAdapter.ITEMS.push(...boards);
  }

  async getOne(dto: Partial<IBoard>): Promise<IBoard | null> {
    const items = BoardDatabaseMemoryAdapter.ITEMS;
    if (items.length === 0) return null;

    const item = items.find((item: any) =>
      Object.entries(dto).every(([key, value]) => item[key] === value)
    );

    return item || null;
  }

  async getAll(): Promise<IBoard[]> {
    return BoardDatabaseMemoryAdapter.ITEMS;
  }

  async save(data: IBoard): Promise<void> {
    BoardDatabaseMemoryAdapter.ITEMS.push(data);
  }

  async update(id: string, data: IBoard): Promise<void> {
    const foundIndex = BoardDatabaseMemoryAdapter.ITEMS.findIndex(
      (item: any) => item.id === id
    );

    if (foundIndex === -1) return;

    BoardDatabaseMemoryAdapter.ITEMS[foundIndex] = data;
  }

  async delete(id: string): Promise<void> {
    const foundIndex = BoardDatabaseMemoryAdapter.ITEMS.findIndex(
      (item: any) => item.id === id
    );

    if (foundIndex === -1) return;

    BoardDatabaseMemoryAdapter.ITEMS.splice(foundIndex, 1);
  }
}
