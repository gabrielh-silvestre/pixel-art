export interface IHashMap<K, V> {
  get size(): number;

  add(key: K, value: V): void;
  get(key: K): V | null;
}
