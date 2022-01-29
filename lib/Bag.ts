import { IBag } from '../ts/interfaces';

export class Bag<T> implements IBag<T> {
    protected contents: Array<T>;

    constructor() {
        this.contents = [];
    }

    add(item: T): void {
        this.contents.push(item);
    }

    get isEmpty() {
        return this.contents.length < 1;
    }

    get size() {
        return this.contents.length;
    }

    get toString() {
        const itemList = this.contents.reduce(
            (previous, current, index, arr) => {
                let separator = ', ';

                if (index === 0) {
                    separator = '';
                }

                if (index === arr.length - 1) {
                    separator = arr.length > 2 ? ', and ' : ' and ';
                }

                return (previous += separator + '' + current);
            },
            ''
        );

        return `This bag contains ${itemList}.`;
    }
}
