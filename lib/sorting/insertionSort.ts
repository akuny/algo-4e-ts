import { swap } from './helpers';

export function insertionSort(collection: number[]): number[] {
    let n = collection.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j > 0 && collection[j] < collection[j - 1]; j--) {
            swap(collection, j, j - 1);
        }
    }

    return collection;
}
