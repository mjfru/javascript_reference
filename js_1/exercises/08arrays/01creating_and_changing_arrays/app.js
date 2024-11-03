//! Most common way to create an array
const numbers = [1, 2, 3];

//* Using a constructor function:
const moreNumbers = new Array(); // []
// const moreNumberts = new Array(5);
//* A single number passed in as an argument will create an empty array with the length of the argument.
console.log(moreNumbers);

//* Niche cases exist where this might be helpful.
const yetMoreNumbers = Array.of(1, 2); // [1, 2]
console.log(yetMoreNumbers);

//* Allows you to convert an array-like object / iterable into an array
const moreNumbersAgain = Array.from("Hi!"); // [ 'H', 'i', '!' ];
console.log(moreNumbersAgain);

const listItems = document.querySelectorAll("li");

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

//! Adding and removing from arrays
const hobbies = ["Sports", "Cooking"];
//* Adding to the end with .push()
hobbies.push("Reading");
// console.log(hobbies);

//* Adding to the beginning with .unshift()
hobbies.unshift("Coding");
// console.log(hobbies);

//* Removing the last element with .pop()
hobbies.pop();
// console.log(hobbies);

//* Removing the first element with .shift()
hobbies.shift();
// console.log(hobbies);

//* Using an index directly to add or remove items
hobbies[1] = "Traveling";
hobbies[5] = "Hiking";
console.log(hobbies);