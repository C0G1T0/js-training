'use strict'

let keepFirst = (myString) => {

	myString = myString.substr(0, 2)
	return myString

}

let keepLast = (myString) => {

	myString = myString.substr(3, 2)
	return myString
	
}

let keepFirstLast = (myString) => {

	myString = myString.substr(3, 2)
	return myString

}

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.deepStrictEqual(keepFirst('abcde'), ('ab') )
assert.deepStrictEqual(keepLast('abcde'), ('de'))
assert.deepStrictEqual(keepFirstLast('abcde'), ('de'))// End of tests */
