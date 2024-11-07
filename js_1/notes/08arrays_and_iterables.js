/*
! Arrays & Other Iterables in JavaScript

? What's an iterable?
* - Objects that implement the 'iterable' protocol and have an @@iterator method.

? In human terms...
* - Objects where you can use the for-of loop

! Not every iterable is an array! Other iterables include: NodeLists, Strings, Maps, and Sets.

? What's an Array-like Object?
* - Technically, these have a length property and use indexes to access items.

* Not every array-like object is an array! Other array-likes are NodeLists and Strings.


! Creating Arrays
There are so many different approaches in how one can create an array.
* See example 01creating_arrays in exercises.

? What can you store in arrays?
You can store the same types of data or mix it up.
["Cooking", "Sports"]
[30, "John", {moreDetail: []}];

! Instead of Looping -- The forEach method
* The forEach method takes a function which takes up to 3 arguments.
*/
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

for (const price of prices) {
	taxAdjustedPrices.push(price * (1 + tax));
}

console.log(taxAdjustedPrices);

prices.forEach((price, idx) => {
	const priceObject = { index: idx, taxAdjPrice: price * (1 + tax) };
	taxAdjustedPrices.push(priceObject);
});

console.log(taxAdjustedPrices);

/*
! .map()
* This is another method on arrays that will take an array, run a function, and return a new element for every element in that array, possibly a transformed element.
*/

const taxAdjustedPrices2 = prices.map((price, idx) => {
	const priceObject = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObject;
});

console.log(prices, taxAdjustedPrices2);

/*
! .sort() & .reverse()
* By default, .sort converts everything to a string and then sorts it.
*/
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices);

console.log(sortedPrices.reverse());

/*
! .filter()
* To reduce the amount of elements based on a filter and return a new copy of an array:
*/

const filteredArray = prices.filter((price, index) => {
  return price > 6;
});
console.log(filteredArray);

/*
! The important .reduce() method
We could do a loop to accomplish adding all the values of an array together.
* Or, we can use less code and take advantage of the .reduce() method.
? It takes a function, a previous value, current value, current Index, and the original array as arguments of that function.
? The last two arguments are RARELY used.
? It also takes a 'starting' point as an argument, after the function.
* .reduce() goes through an array, one element at a time, and you, the programmer, can choose what to do at each step.
You can add the current value to the previous, subtract it, multiply, etc.

*/
// let sum = 0;
// prices.forEach((price) => {
//   sum += price
// })

// console.log(`Sum is: ${sum}`)

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

console.log(sum);