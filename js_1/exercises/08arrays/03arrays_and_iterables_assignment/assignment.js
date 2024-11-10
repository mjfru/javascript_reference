/*

Todo #1
Create an array of numbers (of your choice) and perform three array operations on it: filter for numbers greater than 5, map every number to an object which holds the number on some property (e.g. "num") and reduce the array to a single number (the multiplication of all numbers).
*/

const numArray = [99, 2, 41, 44, 78, 104, 11, 5];

const chainMethodArray = numArray
	.filter((number) => {
		return number > 5;
	})
	.map((number) => {
		const numObj = { num: number };
		return numObj;
	})
	.reduce((previous, current) => {
		return previous * current.num;
	}, 1);

console.log(chainMethodArray);

/*
Todo #2
Write a function ("findMax") which executes some logic that finds the largest number in a list of arguments. Pass the array from task 1 split up into multiple arguments to that function.
*/

function findMax(...arguments) {
	return Math.max(...arguments);
}

const maxNumber = findMax(...numArray);
console.log(maxNumber);

/*
Todo #3
Tweak the "findMax" function such that it finds both the minimum and maximum and returns those as an array. Then use destructuring when calling the function to store the two results in separate constants.
*/

// function findMaxV2(...arguments) {
// 	const result = [];
// 	result.push(Math.max(...arguments));
// 	result.push(Math.min(...arguments));
// 	const [max, min] = result;
// 	return max, min;
// }

function findMaxV2(...arguments) {
  const max = Math.max(...arguments);
  const min = Math.min(...arguments);
  return [min, max];
}

const [min, max] = findMaxV2(...numArray);
console.log(`The smallest number is ${min}, the largest is ${max}.`);

/*
Todo #4
Create a list (and possibly some surrounding logic) where you ensure that NO duplicate values can be added. Use whichever approach seems appropriate to you.
*/

const userIds = new Set();
userIds.add(10);
userIds.add(5);
userIds.add(10);

console.log(userIds);