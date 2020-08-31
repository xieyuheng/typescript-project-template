const assert = require("assert-diff")
assert.options.strict = true

export function assert_equal(x: any, y: any, desc?: string): void {
  assert.deepEqual(x, y, desc || "should be equal")
}
