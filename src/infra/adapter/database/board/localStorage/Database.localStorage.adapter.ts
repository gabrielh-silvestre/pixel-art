import { injectable } from "tsyringe";

import type { IDatabaseAdapter } from "../../Database.adapter.interface";

@injectable()
export class BoardDatabaseLocalStorageAdapter<T>
  implements IDatabaseAdapter<T>
{
  constructor(private readonly key: string) {}

  async getOne(dto: Partial<T>): Promise<T | null> {
    const items = await this.getAll();
    if (items.length === 0) return null;

    const item = items.find((item: any) =>
      Object.entries(dto).every(([key, value]) => item[`_${key}`] === value)
    );

    return item || null;
  }

  async getAll(): Promise<T[]> {
    const items = localStorage.getItem(this.key);

    if (!items) return [];

    return JSON.parse(items);
  }

  async save(data: T): Promise<void> {
    const items = await this.getAll();
    const newItems = [...items, data];

    localStorage.setItem(this.key, JSON.stringify(newItems));
  }

  async update(id: string, data: T): Promise<void> {
    const items = await this.getAll();

    const newItems = items.map((item: any) => {
      if (item.id === id) return { ...item, ...data };
      return item;
    });

    localStorage.setItem(this.key, JSON.stringify(newItems));
  }

  async delete(id: string): Promise<void> {
    const items = await this.getAll();

    const newItems = items.filter((item: any) => item.id !== id);

    localStorage.setItem(this.key, JSON.stringify(newItems));
  }
}
