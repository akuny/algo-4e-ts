import tap from 'tap';
import { Queue } from '../lib/ADT/Queue';

tap.test('Queue', (t) => {
    t.test('knows when it is empty', (t) => {
        const myQueue = new Queue<string>();

        t.ok(myQueue.isEmpty);
        t.end();
    });

    t.test('knows when it is not empty', (t) => {
        const myQueue = new Queue<string>();

        myQueue.enqueue('bananas');

        t.notOk(myQueue.isEmpty);
        t.end();
    });

    t.test('returns its length when it is not empty', (t) => {
        const myQueue = new Queue<string>();

        myQueue.enqueue('bananas');
        myQueue.enqueue('oranges');

        t.equal(myQueue.size, 2);
        t.end();
    });

    t.test('returns null when dequeued while empty', (t) => {
        const myQueue = new Queue<string>();

        let result = myQueue.dequeue();

        t.equal(result, null);
        t.end();
    });

    t.test('returns the first item that was added to the queue', (t) => {
        const myQueue = new Queue<string>();

        myQueue.enqueue('bananas');
        myQueue.enqueue('oranges');
        let result = myQueue.dequeue();

        t.equal(result, 'bananas');
        t.equal(myQueue.size, 1);
        t.end();
    });

    t.test('moves a bunch of items through the queue', (t) => {
        const myQueue = new Queue<string>();

        myQueue.enqueue('bananas');
        myQueue.enqueue('oranges');
        myQueue.enqueue('papaya');

        let first = myQueue.dequeue();
        let second = myQueue.dequeue();

        myQueue.enqueue('fiddle');
        myQueue.enqueue('diddle');
        myQueue.enqueue('dee');

        t.equal(first, 'bananas');
        t.equal(second, 'oranges');
        t.equal(myQueue.size, 4);

        let third = myQueue.dequeue();
        t.equal(third, 'papaya');
        t.equal(myQueue.size, 3);

        t.end();
    });

    t.end();
});
