import tap from 'tap';
import { Bag } from '../lib/Bag';

tap.test('Bar', (t) => {
    t.test('reports its status when empty', (t) => {
        const myBag = new Bag<string>();

        t.ok(myBag.isEmpty);
        t.end();
    });

    t.test('reports its status when not empty', (t) => {
        const myBag = new Bag<string>();

        myBag.add('bananas');

        t.notOk(myBag.isEmpty);
        t.end();
    });

    t.test('reports its length when not empty', (t) => {
        const myBag = new Bag<string>();

        myBag.add('bananas');
        myBag.add('oranges');

        t.equal(myBag.size, 2);
        t.end();
    });

    t.end();
});
