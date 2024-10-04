// function sayHello(name) {
// 	console.log("Hi " + name);
// }

// sayHello();

//TODO 1. Re-write the function you find in assignment.js as an arrow function.

const sayHello = (name) => console.log(`Hi, ${name}.`);
sayHello("Matt");

//TODO 2. Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"), with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).

const greetPerson = (greeting, name) => {
	console.log(`${greeting}, ${name}!`);
};

greetPerson("Good morning", "Jim");

const simpleGreeting = () => console.log("Hello!");
simpleGreeting();

const returnGreeting = (greeting, name) => {
	return `${greeting}, ${name}!`;
};
console.log(returnGreeting("Good afternoon", "Scott"));

//TODO 3. Add a default argument to the function you created: A fallback value for the phrase if no value is provided.
const fallbackGreeting = (greeting = "Hello", name = "you") => {
	return `${greeting}, ${name}.`;
};
console.log(fallbackGreeting());
console.log(fallbackGreeting("Hey", "Austin"));

//TODO 4. Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function if NO argument/ string is an empty string.

const checkInput = (...inputs) => {
	let isValid = true;
	for (let input of inputs) {
		if (!input || input === "") {
			isValid = false;
			console.log("At least one input is invalid.");
			return isValid;
		}
	}
	const validateMessage = () => {
		return `All inputs are valid.`;
	};
	return validateMessage();
};

console.log(checkInput("hello", "", "test"));
