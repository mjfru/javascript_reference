function getMinimum(numbers) {
	if (numbers.length === 0) {
		throw new Error("Array must not be empty.");
	}

	let currentMinimum = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < currentMinimum) {
			currentMinimum = numbers[i];
		}
	}

	return currentMinimum;
}

const testArray = [3, 1, 2];

const min = getMinimum(testArray);
console.log(min); // Expected: 1

// Or, a lengthier approach (custom sort):

function getMinimum2(numbers) {
	if (numbers.length === 0) {
		throw new Error("Array must not be empty.");
	}
	// let sortedNumbers = numbers.sort();
	// let sortedNumbers;

	for (let i = 0; i < numbers.length; i++) {
		let outerElement = numbers[i];
		for (let j = i + 1; j < numbers.length; j++) {
			let innerElement = numbers[j];

			if (outerElement > innerElement) {
				// Swap
				numbers[i] = innerElement;
				numbers[j] = outerElement; // [1, 3, 2];

				outerElement = numbers[i]; // => 1
				innerElement = numbers[j]; // => 3
			}
		}
	}

	return numbers[0];
}

const min2 = getMinimum2(testArray);
console.log(min2); // Expected: 1