/*
! Advanced String Methods in JS
* Of course, we have three ways to create a string in JS: "", '', and ``.
? `` creates template literals, allowing developers to inject dynamic values, but that's not all!
* Enter, Tagged Templates - a function that works together with a template literal
*/

// const name = "Matt";
// console.log(`My name is ${name}.`);

//! Tagged Templates
function productDescription(string, productName, productPrice) {
	console.log(string);
	console.log(productName);
	console.log(productPrice);
	let priceCategory = "inexpensive";
	if (productPrice > 20) {
		priceCategory = "moderate";
	}
	return `${string[0]}${productName}${string[1]}${priceCategory}${string[2]}`;
}

const prodName = "JS Course";
const prodPrice = 22.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

//? Why even use this: When you want to create some output based on some string input.

//! Regular Expressions
const userInput = 'test@test.com';
// To verify this, we can use something like this:
userInput.includes('@');
// But, we still need to check if we have a domain name, a '.', but that could be in the wrong place.
//? Enter the weird looking Regex:
const regex = /^\S+@\S+\.\S+$/
//? ^ - Starting here, S+ - any kind of word, an '@', any kind of work, a '.' and any kind of word again.
console.log(regex.test(userInput));
