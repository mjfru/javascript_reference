// Arrays
const age = [30, 29, 34, 50];

// [30, 29, 34, 50] => [30, 29, 34, 50, 60];
// [0, 1, 2, 3] => [0, 1, 2, 3, 4]; // We not only add another item but also another index.
age.push(60); // Time Complexity: O(1) - Constant, no change to other items

// [30, 29, 34, 50] => [__, 30, 29, 34, 50]; // Adds an item to the beginning, effecting all other items / indexes
age.unshift(10); // Time Complexity: Linear O(n)

const myAge = age[1]; // 30 - Constant Time Complexity: O(1)

//

const namePopularity = [
	{ userName: "mike", usages: 5 },
	{ userName: "pedro", usages: 3 },
];

const mikeUsages = namePopularity.find(
	(person) => person.userName === "mike"
).usages; // 5

// Best Case: Constant Time Complexity O(1)
// Worst Case: Linear Time Complexity (if it's the last item): O(n)
// Average Case: Linear Time Complexity: O(n)

// Object / Map
const nameMap = {
	mike: 5,
	pedro: 3,
};

const mikeUsages2 = nameMap["mike"]; // Constant Time Complexity: O(1)