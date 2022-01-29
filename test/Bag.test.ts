import tap from 'tap';
import { Bag } from '../lib/Bag';
import { Item } from '../ts/types';

tap.test('Bar', (t) => {
    t.test('reports its status when empty', (t): void => {
        const myBag = new Bag<Item>();

        t.ok(myBag.isEmpty);
        t.end();
    });

    t.test('reports its status when not empty', (t): void => {
        const myBag = new Bag<Item>();

        myBag.add({ id: 1, name: 'fig' });

        t.notOk(myBag.isEmpty);
        t.end();
    });

    t.test('reports its size', (t): void => {
        const myBag = new Bag<string>();

        myBag.add('heyo');

        t.equal(myBag.size, 1);
        t.end();
    });

    t.test('can describe itself', (t): void => {
        const myBag = new Bag<string>();

        myBag.add('heyo');
        myBag.add('yayo');

        t.equal(myBag.toString, 'This bag contains heyo and yayo.');
        t.end();
    });

    t.test('can describe itself', (t): void => {
        const myBag = new Bag<string>();

        myBag.add('heyo');
        myBag.add('yayo');
        myBag.add('wahoo');

        t.equal(myBag.toString, 'This bag contains heyo, yayo, and wahoo.');
        t.end();
    });

    t.end();
});
