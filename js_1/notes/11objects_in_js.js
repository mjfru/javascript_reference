/*
! Objects in JS
* Core data structures in JS, helping us to reflect 'real-world' entities and allow us to apply real-world logic to coding.
* They are made up of properties and methods, all of which are key-value pairs.
Properties store data; methods are functions in an object.
They allow us to 'group' related data together and split code into logical pieces.

! Primitive Values vs. Reference Values (Objects!)
* Primitive Values      Reference Values
  - Numbers             - Everything else!
  - Strings             - {...} object literals
  - Booleans            - Arrays
  - Null                - DOM Nodes
  - Undefined           - ...other built-in objects
  - Symbol

? Do remember that objects are, of course, made up of primitive values!
*/

let person = {
	name: "Matt",
	age: 33,
	hobbies: ["Sports", "Coding", "Gaming"],
	greet: function () {
		console.log("Hello there~!");
	},
};

//! Adding / overwriting a property after its creation:
person.isAdmin = true;
//? Using the dot notation on an object declared with 'let' let's you add properties on the fly.

//! Deleting a property:
delete person.age;
//? Use the 'delete' keyword followed by the property to delete.
//? Alternatively, you could set the property to null.
person.age = null;

console.log(person);
person.greet();

/*
* Keys can be entered as strings, which is handy if we have a property like 'first name' or 'first-name'.
* To access properties written like this, we can use bracket notation, with the key in quotes.
? If the key is a number, 1.5: 'hello', for example, you also access such keys with bracket notation.
* Objects are ordered by when the key-value pairs are added to it.
? If the keys are numbers, they are an exception and will be ordered...in order! (1, 2, 3...)
*/

console.log(person['name']);

//* To add an external variable into an object, we can put the variable's name in square brackets on the LEFT side:

let keyName = "favorite book"

let example = {
  'first name': 'Fred',
  [keyName]: "Norwegian Wood"
}
console.log(example);

/*
! Objects Quiz:
? 1. Which of the following syntax examples will NOT throw an error?
*   A. const person = { username: 'Jon' };
? 2. Will this example work?

const propKey = 'field 12';
const person = {
    [propKey]: 'Max'
};
console.log(person['field 12']);

*   A. Yes, it works.

? 3. What would be a use-case for a dynamic property assignment (i.e. for setting a property via [] on the "left side of the colon")?
*   A. You want to set a user-defined property name (like something entered via an input).

? 4. How can you delete a property from an object?
*   A. delete someObject.someProp;
*/