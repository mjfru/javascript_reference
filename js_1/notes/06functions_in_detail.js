/*
! More on Functions
- Code on demand, JS finds all our functions and then executes our script.
- Variables and constants created in functions 'belong' to that functions.
- Can take parameters and can return a value
- Can be called multiple times (with different arguments.)
- Can be called 'directly' or 'indirectly'.

? Parameters vs. Arguments
* Parameters are the variables which you specify between parentheses...when DEFINING a function
function greet(name) {
  alert("Hi " + name)
}
- Name is the parameter here.

* Arguments are the concrete values you pass to a function when calling it.
greet("Matt")
- "Matt" is the argument.


* Methods vs. Functions
Methods are functions that are connected to, or part of, objects.

const person = {
  name: 'Matt',
  greet: function greet() {
    console.log('Hi!');
  }
}

person.greet(); // Hi!

? Functions themselves are actually objects!
console.log(typeof startGame); // function
console.dir(startGame) // f startGame() -- with lots of key-value pairs!


* Function Declarations / Statements
function multiply(a,b) {
  return a * b;
}

* Function Expressions'
const multiply = function(a,b) {
  return a * b;
}

? What's the difference between these two? When should we choose one over another?
* Declarations are hoisted to the top and can be decalred anywhere in the file, even after it's called.
* In other words, it's read as if it's declared at the beginning of the file.

* Expressions are also hoisted BUT are not initialized / defined, they can't just be declared anywhere in the file.
This approach forces you to declare functions before you use them.

! Arrow Functions - A more modern approach to writing JS functions
? General Syntax: (arg1, arg2) => { ... }

? If no arguments () => { ... }

? One argument: arg => { ... }

? Exactly one expression in the body: (a, b) => a + b
(Curly braces can be omitted, result is returned)

! Default Arguments
* You assign a default argument by adding an equal sign (=) next to a parameter and what you want the default value to be.
function greet(name = "Matt") {
  alert("Hi, " + name)
}

! Rest Operator
* What do we do if we want an undefined amount of arguments?

Instead of this...
const sumUp(a, b, c, d) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

We can do this:
? This merges all your arguments, no matter how many, into an array.
* It always must be the last argument in your list!
const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

const sumUp = (...numbers) => {
  let sum = 0;
  * Arguments is built into JS and was what was used before the rest operators.
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
}


sumUp(1, 2, 6, 3, 88, 2)
sumUp(554, 21, 2)
subtractUp(99, 3, 41, 4, 7)

! Function-ception
const sumUp = (a, b, ...numbers) => {
  * Creating a locally-scoped function that only runs inside of sumUp().
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

! .bind() method 
* Creates a function that isn't manually executed but prepared for a future execution with set arguments.

*/
