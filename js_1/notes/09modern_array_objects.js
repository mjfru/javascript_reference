/*
! Modern JS - New(er) Methods for Arrays & Objects

! The Spread [...] Operator
* The spread operator pulls out all elements of an array and gives them to you as a standalone list of elements.
This is a -new- array with the elements of the old one.
*/

const names = ["Matt", "Kelsey", "Jim", "Scott", "Sam", "Austin"];
const copiedNames = [...names];

names.push("Chris"); // Will not be in copiedNames

const prices = [10.99, 5.99, 3.99, 6.99];
Math.min(1, 5, -3); // -3

console.log(Math.min(...prices)); // This works because min() will not take just an array.

const persons = [
	{ name: "Matt", age: 33 },
	{ name: "Jim", age: 34 },
];

const copiedPersons = [...persons];
persons.push({ name: "Kelsey", age: 33 });
persons[1].age = 33;

console.log(persons, copiedPersons);

/*
! Array Destructuring
* This is a shortcut to individually assigning elements of an array to their own individual variables.
? The syntax is quite opposite from declaring an ordinary variable, with an empty array on the left and the array you're referencing on the right.
* The names don't matter, you can call your destructured variables anything you want.
! The only thing that matters is the order.
*/

const nameData = ["Matt", "James", 'Mr.', 33]
const firstName = nameData[0];
const lastName = nameData[1];

const [first, last, ...other] = nameData;
console.log(first); // Matt
console.log(first, last, other)