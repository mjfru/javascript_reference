/*
! Algos and Data Structures

! Big O Notation - How long an operation takes
* Expressed in a generalized form, not in time units but in mathematical terms

Time Complexity

Time
|         /
|       /
|     /
|   /
_ /_________ Items

O(n) .. n = number of affected elements


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

In our examples (getMin), we will count how often a code block executes (1 execution for if check, 1 for returning, multiples for inside of a loop, depending on how long the array is)
? Can be tracked easily by adding some good old console.logs

The time would be broken down into 3 blocks, 1 execution, 2 execution, and 1 execution (if check, loop, return).
* Two of these blocks depend on nothing and will absolutely execute once.
* The loop executes (n - 1), or (n) times, depending on the length of the array

T = c1 + n*c2 + c3

* The constants here don't really matter, we want to know how long it takes based on how many items we 'feed' it.

! Therefore, for this example (Time = n), it depends only, linerarlly on the variable. AKA Linear Time Complexity (0(n)).

! Constant Time Complexity O(1)
* Example push()
const array = [1, 2, 3];
arr.push(5);

! Linear Time Complexity O(n)
* Example: sumUp()
const array = [1, 2, 3,]
const result = supUp(array)

! Quadratic Time Complexity O(n^2)
* Example: sort()
const array = [1, 2, 3]
const sorted = sort(array);

! Logarithmic Time Complexity O(log n)
* Example: binarySearch()
const array = [1, 2, 3];
const el = binarySearch(array, 2);
*/
