require('../lib/array-reject');

const assert = require('assert');

describe('Array#reject', () => {
  it('removes numbers', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = array.reject((n) => n % 2 === 0);

    assert.deepEqual(result, [1, 3, 5, 7, 9]);
  });

  it('removes objects', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = array.reject((n) => n % 2 === 0);

    assert.deepEqual(result, [1, 3, 5, 7, 9]);
  });

  it('throw error when no callback is passed', () => {
    assert.throws(() => { [].reject(); }, TypeError);
  });
});
