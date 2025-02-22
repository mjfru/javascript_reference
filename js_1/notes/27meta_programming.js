/*
! Meta-Programming: 
! Symbols, Iterators, Generators, Reflect API, & Proxy API

! Symbols:
* These are ** PRIMITIVE VALUES**, used as object property identifiers.
They are both built-in and creatable by developers.
* They guarantee uniquness and cannot be overwritten.
*/

// Library:
// () is only for identification, also, notice there's no -new- keyword
const userId = Symbol("userId");
console.log(userId); // Symbol();

// Someone using our library in their app:
const user = {
	// id: "p1",
	[userId]: "p1",
	name: "Matt",
	age: 34,
	[Symbol.toStringTag]: "User",
};

console.log(user);

//! Iterators & Generators:
//* An object which as a .next() method, kind of makes it like a loopable object.
//* A generator builds an iterator

const company = {
	currentEmployee: 0,
	employees: ["Matt", "Jim", "Austin"],
	next() {
		if (this.currentEmployee >= this.employees.length) {
			return { value: this.currentEmployee, done: true };
		}
		const returnValue = {
			value: this.employees[this.currentEmployee],
			done: false,
		};
		this.currentEmployee++;
		return returnValue;
	},
	//! Generator
	[Symbol.iterator]: function* employeeGenerator() {
		// let employee = company.next();
		// while (!employee.done) {
		// 	yield employee.value;
		// 	employee = company.next();
		// }
		let currentEmployee = 0;
		while (currentEmployee < this.employees.length) {
			//? yield saves the current step on the iteration, so if you call it again, it will pick up where it stopped.
			yield this.employees[currentEmployee];
			currentEmployee++;
		}
	},
};

for (const employee of company) {
	console.log(employee);
}

// const it = company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

//! Reflect API
//* This API allows us to control objects, grouping functionalities to help us work with objects; has more methods and is newer than using Object

const course = {
	title: "JavaScript",
};

Reflect.setPrototypeOf(course, {
	toString() {
		return this.title;
	},
});

console.log(course.toString());

//! Proxy API
//* Creates 'traps' for object operators, steps in and executes code.
//* Allows us to control how our code is used!

const courseHandler = {
  get(object, propertyName) {
    console.log(propertyName);
    return object(propertyName);
  }
}
// Wrapping an object over our course object, essentially
const proxyCourse = new Proxy(course, courseHandler);
console.log(proxyCourse.title);

