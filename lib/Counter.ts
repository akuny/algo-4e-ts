export class Counter {
    protected id: string;
    protected n: number;

    constructor(id: string) {
        this.id = id;
        this.n = 0;
    }

    increment(): void {
        this.n = this.n + 1;
    }

    get tally() {
        return this.n;
    }
}
