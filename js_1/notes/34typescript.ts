/*
! TypeScript - Improving JavaScript
* TS builds on top of JS, it's a 'superset' adding more features and syntax.
It DOES NOT run in browsers, an extra tool compiles TS to JS to be executed there.
* Crucially, it does what its name says, it adds static types and compiles next-gen JS to old-school JS!

*/

// function add(a, b) {
//   return a + b;
// }

// add('5', '3') // Notice the strings, not exactly what we want.
//? JS would output '53' in this situation.

//* Adding types to our parameters (a and b must be numbers):
function tsAdd(a: number, b: number) {
	return a + b;
}

// add('5', '3'); //! Immediately, TS tells us this will not work because strings are inputted, not numbers.
tsAdd(5, 3);

//* To write, use, and compile TS, ensure it's installed (globally) and write: tsc fileName.ts in your terminal.