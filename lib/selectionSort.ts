export function selectionSort<T>(collection: T[]): T[] {
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
    return collection;
}

function swap<T>(arr: T[], i: number, j: number) {
    let cached = arr[i];
    arr[i] = arr[j];
    arr[j] = cached;
}
