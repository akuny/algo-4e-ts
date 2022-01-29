export interface IBag<T> {
    isEmpty: boolean;
    size: number;
    toString: string;
    add(item: T): void;
}
