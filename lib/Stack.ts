import { Node } from './Node';
import { IStack } from '../ts/interfaces';

export class Stack<T> implements IStack<T> {
    private head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    push(item: T) {
        let oldHead = this.head;
        this.head = new Node(item);
        this.head.next = oldHead;
    }

    pop(): T | null {
        let oldHead = this.head;
        if (oldHead === null) return oldHead;

        this.head = oldHead.next;
        return oldHead.item;
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
