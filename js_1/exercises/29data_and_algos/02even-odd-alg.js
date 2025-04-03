//! Even or Odd?
function isEvenOrOdd(number) {
  // const result = number % 2;
  // if (result === 0) {
  //   return 'Even';
  // } else {
  //   return 'Odd';
  // }
  return number % 2 ? 'Odd' : 'Even';
}

//! This is a constant time complexity 0(1)

console.log(isEvenOrOdd(10)); // Even
console.log(isEvenOrOdd(11)); // Odd