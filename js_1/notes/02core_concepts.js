/*
! Variable & Constants
* A 'data container' / 'data storage'
let [keyword] = [value]

* Constants are forms of data storage where the value does NOT change.
* Use constants as often as possible (i.e. whenever you actually have data that never changes-- to be clear about your intentions in the code.)

? How to name them?
* Allowed:
  - Best Practice: camelCase
  - Only letters and digits
  - $ is allowed
  - _ is allowed too.

! Not Allowed / Bad Practices:
  - Snake case user_name
  - Starting digits (let 21Players)
  - Using the dash or other special characters
  - Keywords (let, const)

! Operators
*   +, -, *, /, %, ** -- Typical mathematical operators
* = - Assign a value

! Data Types
* Numbers
  - 2, -10, 32334.222
  - Important for calculations and code where you need to 'work with a number'

* Strings (Text)
  - "Hi" "Hello" "Hey"
  - Wrapped in quotes (single or double, must match) or back-ticks ``
  - Important for outputting results

! Functions
* Code 'on demand'
  1. Define Function
  function greet(name) {
    alert('Hi' + name)
  }
* To execute a function, you call it.
  2. greet('Matt');
* And it can be called as often as you want with different parameters.
*/

let userName = "Matt"; // Matt
userName = "Matthew"; // Matthew

const totalUsers = 15;
//! const totalUsers = 20; Error!
