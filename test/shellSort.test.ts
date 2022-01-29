import tap from 'tap';
import { shellSort } from '../lib/sorting/shellSort';

tap.test('shellSort', (t) => {
    t.test('sorts', (t): void => {
        let myArray = [9, 7, 5, 3, 1];

        shellSort(myArray);

        t.same(myArray, [1, 3, 5, 7, 9]);
        t.end();
    });

    t.end();
});
