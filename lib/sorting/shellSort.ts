import { swap } from './helpers';

export function shellSort(collection: number[]): void {
    let n = collection.length;
    let h = 1;

    while (h < n / Math.floor(3)) {
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
