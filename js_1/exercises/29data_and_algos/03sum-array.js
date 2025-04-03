//! Sum the Array

const array = [1, 2, 3];

function sumUp(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) { // Executes (n) times
		sum += numbers[i];
	}

	return sum; // Executes once, not matter what
}

//! Linear Time Complexity = 0(n)

console.log(sumUp(array)); // 6
