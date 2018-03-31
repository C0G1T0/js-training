'use strict'


let cutFirst = (myString) => {

	myString = myString.substring(2,(myString.length));
	return myString


}

let cutLast = (myString) => {

	myString = myString.substr(-5, 3)
		return myString



	
}

let cutFirstLast = (myString) => {

	myString = myString.substring(2,((myString.length)-2));
	return myString

}

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.deepStrictEqual(cutFirst('abcde'), ('cde') )
assert.deepStrictEqual(cutLast('abcde'), ('abc'))
assert.deepStrictEqual(cutFirstLast('abcde'), ('c'))

// End of tests */
