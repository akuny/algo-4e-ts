import { Node } from './Node';
import { IBag } from '../ts/interfaces';

export class Bag<T> implements IBag<T> {
    protected head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    add(item: T): void {
        let oldHead = this.head;
        this.head = new Node(item);
        this.head.next = oldHead;
    }

    get isEmpty() {
        return this.head === null;
    }

    get size() {
        let temp = this.head;
        let num = 0;

        while (temp !== null) {
            temp = temp.next;
            num = num + 1;
        }

        return num;
    }
}
