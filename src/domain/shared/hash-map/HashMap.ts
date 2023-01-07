export class HashMap<K, V> {
  private map: Array<Array<[K, V]>>;
  private _size: number;

  constructor(size: number = 1000) {
    this._size = size;
    this.map = new Array<Array<[K, V]>>(size);
    for (let i = 0; i < this.map.length; i++) {
      this.map[i] = new Array<[K, V]>();
    }
  }

  get size(): number {
    return this._size;
  }

  private hash<K>(key: K): number {
    const anyKey = key as any;

    if (typeof anyKey.toString !== "function") {
      throw new Error("Key must be a string or a number");
    }

    return anyKey
      .toString()
      .split("")
      .reduce((acc: number, char: string) => {
        return acc + char.charCodeAt(0);
      }, 0);
  }

  private hashFunction(key: K): number {
    return this.hash(key) % this._size;
  }

  public add(key: K, value: V): void {
    const bucket = this.hashFunction(key);
    this.map[bucket].push([key, value]);
  }

  public get(key: K): V | null {
    const bucket = this.hashFunction(key);

    const foundItem = this.map[bucket].find(([k]) => {
      return k === key;
    });

    return foundItem ? foundItem[1] : null;
  }
}
