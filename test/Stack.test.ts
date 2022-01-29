import tap from 'tap';
import { Stack } from '../lib/Stack';

tap.test('Stack', (t) => {
    t.test('knows when it is empty', (t) => {
        const myStack = new Stack<string>();

        t.ok(myStack.isEmpty);
        t.end();
    });

    t.test('knows when it is not empty', (t) => {
        const myStack = new Stack<string>();

        myStack.push('bananas');

        t.notOk(myStack.isEmpty);
        t.end();
    });

    t.test('returns its length when it is not empty', (t) => {
        const myStack = new Stack<string>();

        myStack.push('bananas');
        myStack.push('oranges');

        t.equal(myStack.size, 2);
        t.end();
    });

    t.test('returns null when popped while empty', (t) => {
        const myStack = new Stack<string>();

        let result = myStack.pop();

        t.equal(result, null);
        t.end();
    });

    t.test('returns the most recently pushed item', (t) => {
        const myStack = new Stack<string>();

        myStack.push('bananas');
        myStack.push('oranges');
        let result = myStack.pop();

        t.equal(result, 'oranges');
        t.equal(myStack.size, 1);
        t.end();
    });

    t.test(
        'returns the most recently pushed item after a bunch of pushes and pulls',
        (t) => {
            const myStack = new Stack<string>();

            myStack.push('bananas');
            myStack.push('oranges');
            myStack.push('papaya');

            let first = myStack.pop();
            let second = myStack.pop();

            myStack.push('fiddle');
            myStack.push('diddle');
            myStack.push('dee');

            t.equal(first, 'papaya');
            t.equal(second, 'oranges');

            t.equal(myStack.size, 4);
            t.end();
        }
    );

    t.end();
});
