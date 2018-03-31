'use strict'

const whisper = (myString) => {

	return myString.toLowerCase()

}
/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('ABC'), ('abc'))
assert.deepStrictEqual(whisper('TTC'), ('ttc'))
assert.deepStrictEqual(whisper('123'), ('123'))

// End of tests */
