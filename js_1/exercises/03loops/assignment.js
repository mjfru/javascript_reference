const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

//TODO #1. Write code that shows an alert (with any message) when that number is greater than 0.7.
if (randomNumber > 0.7) {
	alert("Large guy detected!");
}

//TODO #2. Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside of the loop.
const myArr = [1, 26, 4, 5, 66, 3, 10, 8, 38, 11, 9, 7, 20, 14, 18];

for (let i = 0; i < myArr.length; i++) {
	console.log(myArr[i]);
}

for (playerNumber of myArr) {
	console.log(playerNumber);
}

//TODO #3. Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.
for (let i = myArr.length - 1; i >= 0; i--) {
	console.log(myArr[i]);
}

//TODO #4. Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
const secondRando = Math.random();
console.log(randomNumber, secondRando)
if ((randomNumber > 0.7 && secondRando > 0.7) || (randomNumber < 0.2 || secondRando < 0.2)) {
  alert("They're either really big or really small.")
}
