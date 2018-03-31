'use strict'


const yell = (myString) => {

	return myString.toUpperCase()

}
/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('abc'), ('ABC'))
assert.deepStrictEqual(yell('ttc'), ('TTC'))
assert.deepStrictEqual(yell('123'), ('123'))
// End of tests */
