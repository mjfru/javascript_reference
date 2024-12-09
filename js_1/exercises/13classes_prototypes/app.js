class OlderPerson {
	printAge() {
		console.log(this.age);
	}
}

class Person extends OlderPerson {
	name = "Matt";

	constructor() {
		super();
		this.age = 30;
	}

	greet() {
		console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
	}
}

//? What does this look like behind-the-scenes?
// function Person() {
// 	this.age = 30;
// 	this.name = "Matt";
// 	this.greet = function () {
// 		console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
// 	};
// }

console.dir(Person);
// This still works either way!
const person = new Person();
person.greet();

//* Checking prototypes functionality
console.log(person.__proto__ === Person.prototype);

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }
// console.log(person.__proto__)

//! The above totally replaces what's stored in prototype; a better way would be this:
// Person.prototype.printAge = function() {
//   console.log(this.age);
// }

person.printAge();

const p2 = new person.__proto__.constructor();
console.log(p2);

//! Setting & Getting Prototypes
const course = {
	title: "JavaScript for Everyone",
	rating: 5,
};

console.log(Object.getPrototypeOf(course));
// Two params: the object name and the prototype you want to use:
Object.setPrototypeOf(course, {
	...Object.getPrototypeOf(course),
	printRating: function () {
		console.log(`${this.rating}/5`);
	},
});

//? Another way to create an object:
const student = Object.create({
	printProgress: function () {
		console.log(this.progress);
	},
});

//? And another way to update the method inside of an object:
Object.defineProperty(student, "progress", {
	configurable: true,
	enumerable: true,
	value: 0.8,
	writable: false,
});

course.printRating();
console.log(student);
