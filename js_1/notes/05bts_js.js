/*
! JavaScript Behind the Scenes & Other Details

! var vs. let vs. const

* var
- Creates a variable
- Available since JS came into existence
- Suitable for function and global scopes

* let
- Creates a variable
- Available since ES6
- Block scoped

* const
- Creates a constant
- Available since ES6
- Block scoped

? See example exercise for differences.

! Hoisting
The JS engine goes over your script, looks for functions, loads and registers them, and does the same thing for variables declared with var.

* JS declares all our variables first, hoists them to the top, but does not read the values yet


! JavaScript Engines
What does your browser do with this code?

const name = "Matt";
alert(name);

Every major browser has a JS engine that parses and executes your scrips.
They consist of an interpreter and compiler(JiT)

* The interpreter translates our code to byte (machine code) and begins execution.
* This translation is passed to the compiler, which runs side-by-side with the interpreter. 
* With all this compiled machine code, your computer receives it and reads it.+


! How Code Gets Executed
Inside of the JS Engine there is something called a 'heap' and a 'stack':

* Heap - Memory allocation which stores data in your system memory and manages to access it.

* Stack - Execution context - Manages your program flow (functions and communication), controls which thing is happening and when it should happen.

? JavaScript is single-threaded: "One thing happens at a time!"


! Primitive vs. Reference Values
* There are two categories of types/values in JavaScript

* Primitive Values:
- Strings, numbers, booleans, null, undefined, and Symbol
- Stored in memory (normally on the Stack), variable stores value itself
- Copying a variable (assigning to a different variable) copies the -value-.

? Example:
let user = 'Matt';
let anotherUser = user; // Matt
name = 'Jim';
anotherUser // Matt

* Reference Values:
- All other objects ("more expensive to create")
- Stored in memory (heap), variable stores a pointer (address) to a location in memory
- Copying a variable (= assign to a different variable) copies the pointer/reference

? Example:
let hobbies = ["Sports"]
* This is copying the address since it's a reference value and will therefore reflect what it is pointing to.
let newHobbies = hobbies; // "Sports"
hobbies.push("Cooking");
newHobbies // "Sports", "Cooking"

let person = { age: 30 };
let anotherPerson = person;
anotherPerson.age = 33;
person // { age: 33 }


*/
