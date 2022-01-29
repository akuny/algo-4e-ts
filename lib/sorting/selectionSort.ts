import { swap } from './helpers';

export function selectionSort(collection: number[]): void {
    let n = collection.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (collection[j] < collection[min]) {
                min = j;
            }

            swap(collection, i, min);
        }
    }
}
