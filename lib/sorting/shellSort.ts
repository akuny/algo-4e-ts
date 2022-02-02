import { swap } from './helpers';

export function shellSort(collection: number[]): void {
    let n = collection.length;
    let h = 1;

    /**
     * "By h-sorting for some large values of h, we can move
     * entries in the array long distances and thus make it
     * easier to h-sort for smaller values of h. Using such a
     * procedure for any increment sequence of values of h that
     * ends in 1 will produce a sorted array."
     *
     * https://algs4.cs.princeton.edu/21elementary/
     */
    while (h < Math.floor(n / 3)) {
        h = Math.floor(3 * h) + 1;
    }

    while (h >= 1) {
        for (let i = h; i < n; i++) {
            for (
                let j = i;
                j >= h && collection[j] < collection[j - h];
                j -= h
            ) {
                swap(collection, j, j - h);
            }
        }

        h = Math.floor(h / 3);
    }
}
