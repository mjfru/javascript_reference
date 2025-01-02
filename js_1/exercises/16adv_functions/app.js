//! Pure
function add(num1, num2) {
	return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

//! Impure
function addRandom(num1) {
	return num1 + Math.random();
}

console.log(addRandom(5));

//! Side Effects
let previousResult = 0;

function addMore(num1, num2) {
	const sum = num1 + num2;
	previousResult = sum;
	return sum;
}

const hobbies = ["Coding", "Sports", "Gaming"];

function printHobbies(array) {
	array.push("New Hobby");
	console.log(array);
}

printHobbies(hobbies);

//! Closure practice
let username = "James"; // Example #1 - Results in 'Hi James'

function greetUser() {
	// let name = username; // Example #3 - Results in 'Hi Matt' again
	let name = "Anna"; // Example #4 - Results in 'Hi Anna' because the inner environemnt wins over the outer.
  // If it didn't find name in the function, then it would check outside.
	console.log("Hi " + name); // Changed username to name
}

let name = "Jim"; // Example #4 - Results in 'Hi Anna'
username = "Matt"; // Example #2 - Results in 'Hi Matt' now

greetUser();
