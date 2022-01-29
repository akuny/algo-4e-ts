import tap from 'tap';
import { selectionSort } from '../lib/sorting/selectionSort';

tap.test('selectionSort', (t) => {
    t.test('sorts', (t) => {
        let myArray = [9, 7, 5, 3, 1];

        selectionSort(myArray);

        t.same(myArray, [1, 3, 5, 7, 9]);
        t.end();
    });

    t.end();
});
