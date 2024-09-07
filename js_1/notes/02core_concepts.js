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
*/

let userName = "Matt"; // Matt
userName = "Matthew"; // Matthew

const totalUsers = 15;
//! const totalUsers = 20; Error!
