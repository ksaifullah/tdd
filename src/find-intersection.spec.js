const { findIntersection } = require('./find-intersection');

describe('find-intersection', () => {
  test('returns intersection', () => {
    expect(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])).toEqual('1,4,13');
  });
});
