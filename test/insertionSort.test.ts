import tap from 'tap';
import { insertionSort } from '../lib/sorting/insertionSort';

tap.test('insertionSort', (t) => {
    t.test('sorts', (t): void => {
        let myArray = [9, 7, 5, 3, 1];

        insertionSort(myArray);

        t.same(myArray, [1, 3, 5, 7, 9]);
        t.end();
    });

    t.end();
});
