export interface IDatabaseAdapter<T> {
  getOne(dto: Partial<T>): Promise<T | null>;
  getAll(): Promise<T[]>;
  save(data: T): Promise<void>;
  update(id: string, data: T): Promise<void>;
  delete(id: string): Promise<void>;
}
