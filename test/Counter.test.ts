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

    t.test('prints zero', (t): void => {
        const myCounter = new Counter('myNewCounter');

        t.equal(
            myCounter.toString,
            'Counter "myNewCounter" has been clicked zero times.'
        );
        t.end();
    });

    t.test('prints one', (t): void => {
        const myCounter = new Counter('myNewCounter');
        myCounter.increment();

        t.equal(
            myCounter.toString,
            'Counter "myNewCounter" has been clicked 1 time.'
        );
        t.end();
    });

    t.test('prints two', (t): void => {
        const myCounter = new Counter('myNewCounter');

        myCounter.increment();
        myCounter.increment();

        t.equal(
            myCounter.toString,
            'Counter "myNewCounter" has been clicked 2 times.'
        );
        t.end();
    });

    t.end();
});
