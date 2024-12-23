
//! Pure
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

//! Impure
function addRandom(num1) {
  return num1 + Math.random()
}

console.log(addRandom(5));

//! Side Effects
let previousResult = 0;

function addMore(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

const hobbies = ["Coding", "Sports", "Gaming"];

function printHobbies(array) {
  array.push('New Hobby');
  console.log(array);
}

printHobbies(hobbies);