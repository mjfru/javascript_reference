/*
! Loops
* We often need to execute code multiple times or to execute a number of times while something is true.

! for loop
  - The "OG" loop, it will execute code a certain number of times (using a counter variable).
  
  for (let i = 0; i < 3; i++) {
    console.log(i)
  }

! for-of loop
  * - Quite a bit newer, this loops executes for every element in an array

  for (const element of array) {
    console.log(element)
  }

! for-in loop
  * - Also newer, this loop pattern executes code for every key in an object.
  for (const key in object) {
    console.log(key);
    console.log(object[key]);
  }

! while loop
  - Another "OG" code block, while loops execute code as long as a condition is true.
  while (isSomething) {
    doThis();
  }

! do...while loop
const i = 0;  
do {
  console.log(j);
  j++;
  } while (j < 3);
}


! Error Handling
* Some errors cannot be avoided, they're beyond your control as a developer.
E.g. - User input errors, networks errors, etc.
* Our goal, as developers, is to throw and catch errors to fail gracefully or recover if possible.
*/
