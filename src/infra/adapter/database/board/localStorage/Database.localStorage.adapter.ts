import { injectable } from "tsyringe";

import type { IDatabaseAdapter } from "../../Database.adapter.interface";

@injectable()
export class BoardDatabaseLocalStorageAdapter<T>
  implements IDatabaseAdapter<T>
{
  constructor(private readonly key: string) {}

  private recursiveNormalizePropertyNames(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.recursiveNormalizePropertyNames(item));
    }

    if (typeof data === "object") {
      return Object.entries(data).reduce((acc, [key, value]) => {
        const newKey = key.replace(/^_/, "");
        return { ...acc, [newKey]: this.recursiveNormalizePropertyNames(value) };
      }, {});
    }

    return data;
  }

  private internalRecover(): T[] {
    const items = localStorage.getItem(this.key);

    if (!items) return [];

    return JSON.parse(items);
  }

  async getOne(dto: Partial<T>): Promise<T | null> {
    const items = this.internalRecover();
    if (items.length === 0) return null;

    const item = items.find((item: any) =>
      Object.entries(dto).every(([key, value]) => item[`_${key}`] === value)
    );

    return item ? this.recursiveNormalizePropertyNames(item) : null;
  }

  async getAll(): Promise<T[]> {
    const items = localStorage.getItem(this.key);

    if (!items) return [];

    return JSON.parse(items).map(this.recursiveNormalizePropertyNames);
  }

  async save(data: T): Promise<void> {
    const items = this.internalRecover();
    const newItems = [...items, data];

    localStorage.setItem(this.key, JSON.stringify(newItems));
  }

  async update(id: string, data: T): Promise<void> {
    const items = this.internalRecover();

    const newItems = items.map((item: any) => {
      if (item.id === id) return { ...item, ...data };
      return item;
    });

    localStorage.setItem(this.key, JSON.stringify(newItems));
  }

  async delete(id: string): Promise<void> {
    const items = this.internalRecover();

    const newItems = items.filter((item: any) => item.id !== id);

    localStorage.setItem(this.key, JSON.stringify(newItems));
  }
}
