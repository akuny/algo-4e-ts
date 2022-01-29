export class Node<T> {
    protected item: T;
    protected _next: Node<T> | null;

    constructor(item: T) {
        this.item = item;
        this._next = null;
    }

    public get next() {
        return this._next;
    }

    public set next(item: Node<T> | null) {
        this._next = item;
    }
}
