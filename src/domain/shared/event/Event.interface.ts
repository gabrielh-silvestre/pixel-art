export interface IEvent<T> {
  get name(): string;
  get payload(): T;
  get occurredAt(): Date;
}
