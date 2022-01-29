import tap from 'tap';
import { Counter } from '../lib/Counter';

tap.test('Counter', (t) => {
    t.test('increments', (t): void => {
        const myCounter = new Counter('myNewCounter');

        myCounter.increment();
        myCounter.increment();
        myCounter.increment();

        t.equal(myCounter.tally, 3);
        t.end();
    });

    t.end();
});
