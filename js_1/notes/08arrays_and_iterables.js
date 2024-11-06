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