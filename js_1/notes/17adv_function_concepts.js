/*
! Pure Functions & Side Effects
* A Pure Function is a function that, with a given input, always provides the SAME output and does not trigger any side effects.
? Triggering a side effect means it does not change anything outside of the function itself (setting values, etc.)

It's typically a good aim to try to program pure functions when possible.
It eliminates guess work and is easy to understand but it's often impossible to rely only on pure functions.
Rather, we should try out best to code pure first and impure only when it's essential.

! Factory Functions - A function that produces another function
If you have a function you call multiple times throughout your app and it can be pre-configured, we can use these to make our code DRY-er.
*/

function createTaxCalculator(tax) {
	function calculateTax(amount) {
		return amount * tax;
	}
	return calculateTax;
}

// What's the benefit? We don't need the tax percentage as an input and can thus do this:

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

/*
! Closures
* Every function is a closure in JS, every function closes over the surrounding environment and remembers them! (Interview prep)
A function within a function has access to its parent's variables and any global variables.
The outer function cannot access the inner function's variables.
? These are DIFFERENT LEXICAL ENVIRONMENTS.
*/

/*
! Recursion
* The practice of a function calling itself, usually to save on syntax and solved nested problems.
*/

/*
! Advanced Functions Quiz:

TODO #1: Is the following function a pure function?
let defaultValue = 10;
function addNumber(num) {
    return num + defaultValue;
}

? ANSWER: No, it doesn't yield the same output.

TODO #2: When does a function have a "side effect"?
? ANSWER: A function interacts with something outside of the function or does something that's not directly related to its internal calculation.

TODO #3: Why is every function a 'closure' in JavaScript?
? ANSWER: Because it memorizes the surrounding environment and the variables of that environment.

TODO #4: When is a function a recursive function?
? ANSWER: When / If it calls itself.
*/
