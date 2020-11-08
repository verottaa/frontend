export class Queue<T> {
  private _storage: T[];
  private _generalIndex;

  constructor() {
    this.clearQueue();
  }

  public get values(): T[] {
    return this._storage;
  }

  public get size(): number {
    return this._storage.length;
  }

  public enqueue(item: T): number {
    return this.addToQueue(item);
  }

  public dequeue(): void {
    this.pop();
  }

  public clear(): void {
    this.clearQueue();
  }

  private addToQueue(item: T): number {
    const currentIndex = this._generalIndex;
    this._storage.push(item);
    return currentIndex;
  }

  private pop(): void {
    const temp: T[] = this._storage.slice(1, this.size);
    this.saveStorage(temp);
  }

  private clearQueue(): void {
    this._storage = [];
  }

  private saveStorage(storage: T[]): void {
    this._storage = storage;
  }
}
