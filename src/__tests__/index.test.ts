import test from 'ava';
import { sayHello } from '..';

test('my passing test', (t: any) => {
  t.is(sayHello(), 'hi');
});
