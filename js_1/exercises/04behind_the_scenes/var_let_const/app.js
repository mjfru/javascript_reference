// var myName = "Matt";

// if (myName === 'Matt') {
//   //? Because of var, this variable is now available globally
//   //? Declaring hobbies with let or const would not be available outside of local scope
//   //! This gives us greater control of how and when our variables are accessed, changed, etc., deprecating var in the process.
//   var hobbies = ['Sports', 'Games'];
//   console.log(hobbies);
// }

// function greet() {
// 	// let age = 33;
//   //? Changing this to var = ... 
//   var age = 33;
//   //
//   var myName = 'Mathias' // Shadowing, overwriting in the function
//   //
// 	console.log(myName, age, hobbies);
// }

// console.log(myName, hobbies);
// greet(); // Matt
// // console.log(myName, age); // Not defined, age is only in the local scope

console.log(userName); // Undefined with var, error w/ let / const

let userName = 'Matt';