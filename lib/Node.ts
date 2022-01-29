export class Node<T> {
    private _item: T;
    private _next: Node<T> | null;

    constructor(item: T) {
        this._item = item;
        this._next = null;
    }

    public get item(): T {
        return this._item;
    }

    public get next(): Node<T> | null {
        return this._next;
    }

    public set next(item: Node<T> | null) {
        this._next = item;
    }
}
