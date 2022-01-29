export interface IBag<T> {
    isEmpty: boolean;
    size: number;
    add(item: T): void;
}
