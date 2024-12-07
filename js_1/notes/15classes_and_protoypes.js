/*
! Classes & Prototypes: Behind-the-scenes and Introducing Prototypes
* Behind the curtain, classes utilize their own constructor functions.
As the blueprint for objects, they hold properties and methods

function Person() {
	this.age = 30;
	this.name = "Matt";
	this.greet = function () {
		console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
	};
}

* The 'new' keyword, when instantiating a new class, essentially executes the above function, sets it to an empty object, and adds all your specified properties and methods to it.

? Our modern syntax is just 'syntactical sugar' for the example above; it eliminates a lot of the wordiness and complications, like a shortcut.

! Prototypes
* JS uses 'Prototypical Inheritance'
* The class syntax is basically just 'syntactic sugar', as explained above.
* These constructor functions and prototypes power JavaScript Objects!

? What exactly are prototypes?

* Consider that both of these are made via a constructor function (class)
class Person {...}
function Person() {...}

* Every constructor function you call has a prototype property by default and is automatically assigned to whatever instance you're making.

! Prototype Objects === 'Fallback Objects"
person
name
greet

person.sayHello() <--- doesn't exist BUT maybe the prototype does (it doesn't, spoiler)...and then it looks at the prototype of the prototype.

* They are connected objects that are fallbacks for any other objects you create.
? This is why and how we can use string, array, and other types of methods.

! The Prototype Chain
* When you build a blueprint and an object based on it, it will naturally check the object itself based on the constructor function.
* If it's not there, it looks in the prototype that is automatically assigned, then looks in its own prototype again, and again, until it reaches the Global object.


*/
