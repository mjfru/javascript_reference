/*
! Advanced Numbers & Strings in JavaScript
* In JS, every number is a float! But JS does not know special integer types like other programming languages.

Numbers are stored as 64-bit floating points in JS.
While this covers most cases, it does present some limitations to what JS can do with numbers.
*/

//? This is the largest number JS can RELIABLY produce
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//? This is the largest number (in terms of value in general) JS can produce
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

//! Weird JS - Example
console.log(0.2 + 0.4); // 0.6000000000000001
// Why? It all comes down to the binary system and the decimal system.
// All programming languages convert decimal systems to binary and back again.

//! An Alternative Number: BigInt
//* This provides us a way to access and use numbers bigger than the max safe integer.

console.log(9007199254740991n) // Add an 'n' to indicate a bigInt but there is NO floating point, only whole integers.
// Keep in mind you cannot mix bigInt with other number types.

//! The Global "Number" and "Math" Objects
// The Global Number and Math have many methods attached to them
Infinity
isFinite

Math.E;
Math.PI;
Math.abs(10);
Math.random();

//! Math.random() examples
function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(0, 10))