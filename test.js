var tap = require('tap');

// you can test stuff just using the top level object.
// no suites or subtests required.

tap.equal(1, 1, 'check if numbers still work');
tap.notEqual(1, 2, '1 should not equal 2');

tap.test('first stuff', function (t) {
  t.ok(true, 'true is ok');
  t.similar({ a: [1, 2, 3] }, { a: [1, 2, 3] });
  // call t.end() when you're done
  t.end();
});
