import { Node } from './Node';
import { IQueue } from '../ts/interfaces';

export class Queue<T> implements IQueue<T> {
    private head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    enqueue(item: T) {
        if (this.head === null) {
            let oldHead = this.head;
            this.head = new Node(item);
            return (this.head.next = oldHead);
        }

        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(item);
    }

    dequeue(): T | null {
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
