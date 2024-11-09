/*
TODO: Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.

For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].
*/

function transformToObjects(numberArray) {
	// Todo: Add your logic
	return numberArray.map((num) => {
		return { val: num };
	});
	// should return an array of objects
}

console.log(transformToObjects([1, 2, 3]));
