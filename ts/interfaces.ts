export interface IBag<T> {
    add(item: T): void;
    isEmpty: boolean;
    size: number;
}

export interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | null;
    isEmpty: boolean;
    size: number;
}

export interface IStack<T> {
    push(item: T): void;
    pop(): T | null;
    isEmpty: boolean;
    size: number;
}
