export function swap<T>(arr: T[], i: number, j: number) {
    let cached = arr[i];
    arr[i] = arr[j];
    arr[j] = cached;
}
