//! Creating, Add, & Removing from Arrays

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
// console.log(hobbies);

//! Splice
//* .splice() allows us to insert items in between others in an array.
// It typically takes two arguments, a starting index and the amount of indexes you want to delete after that, and what you want to insert from the starting position.
//* Inserting something with .splice():
hobbies.splice(1, 0, "Eating good food");
// console.log(hobbies);

//* Deleting something with .splice():
hobbies.splice(0, 1);
console.log(hobbies);

//! Slice
//* .slice() copies an array and creates a brand new one
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const savedResults = testResults.slice();
console.log(savedResults);

//* Using .slice() to select only a part of an array:
//? .slice(startIndex, endIndex (optional))
const selectedResults = testResults.slice(0, 2);
console.log(selectedResults);

const allButFirst = testResults.slice(1);
console.log(allButFirst);

//! Adding & Returning a new array with .concat()
const newResults = testResults.concat([3, 64, 11]);
console.log(newResults);

//! Retrieving the Index of an Item
//* .indexOf, without a second argument, searches the entire array for the FIRST matched value.
console.log(testResults.indexOf(5.3));
//* This is the same, but starts at the right of the array
console.log(testResults.lastIndexOf(5.3));

const personData = [{ name: "Matt" }, { name: "Max" }];
console.log(personData.indexOf({ name: "Matt" }));
//! Objects are never identical, so this won't work.

//! Here, we need .find() or .findIndex()
