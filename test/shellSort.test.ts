import tap from 'tap';
import { shellSort } from '../lib/sorting/shellSort';

tap.test('shellSort', (t) => {
    t.test('sorts', (t) => {
        let myArray = [9, 7, 5, 3, 1, 120, 4, 5, 77, -4, -3, -50, 21, 600, 3];

        shellSort(myArray);

        t.same(
            myArray,
            [-50, -4, -3, 1, 3, 3, 4, 5, 5, 7, 9, 21, 77, 120, 600]
        );
        t.end();
    });

    t.end();
});
