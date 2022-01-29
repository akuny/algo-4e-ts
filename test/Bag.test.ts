import tap from 'tap';
import { Bag } from '../lib/ADT/Bag';

tap.test('Bar', (t) => {
    t.test('knows when it is empty', (t) => {
        const myBag = new Bag<string>();

        t.ok(myBag.isEmpty);
        t.end();
    });

    t.test('knows when it is not empty', (t) => {
        const myBag = new Bag<string>();

        myBag.add('bananas');

        t.notOk(myBag.isEmpty);
        t.end();
    });

    t.test('returns its length when it is not empty', (t) => {
        const myBag = new Bag<string>();

        myBag.add('bananas');
        myBag.add('oranges');

        t.equal(myBag.size, 2);
        t.end();
    });

    t.end();
});
