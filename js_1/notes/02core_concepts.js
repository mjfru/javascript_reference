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

* Booleans (True / False)
  - true / false, and only true or false
  - Important for conditional code and situations where there are only two options.

* Objects
  - { name: "Matt", age: 31 }
  - Key value pairs that are important for grouped / related data; helps you with organizing data.

* Arrays
  - [1, 3, "hello"]
  - A list of data, useful for unknown amounts of data
  - Allowed to mix data types in arrays

* Null / Undefined / NaN (Not a Number)
  Undefined - Default value of uninitialized variables, indicates nothing is there!
    - Should never be assigned as a value manually.
  Null - No data but is never assumed by default.
    - It's set manually if you want to 'reset/clear' a variable.
  NaN - Technically not a type but it's a type of -number- and can be used in calculations.
    - It yields a new NaN and it's the result of invalid calculations. (3 * 'hi', for example)


! Functions
* Code 'on demand'
  1. Define Function
  function greet(name) {
    alert('Hi' + name)
  }
* To execute a function, you call it.
  2. greet('Matt');
* And it can be called as often as you want with different parameters.

! The 'defer' Keyword
* Adding 'defer' inside the opening tag of <script> allows the browser to download the script but only executes it once HTML and other elements have been parsed.
* Adding 'async' does not wait for HTML to be parsed and executes as soon as possible. Better for scripts that have nothing to do with appearance of the webpage and doesn't rely on HTML content.
? These are only for external scripts, not any written in the HTML itself.
*/

let userName = "Matt"; // Matt
userName = "Matthew"; // Matthew

const totalUsers = 15;
//! const totalUsers = 20; Error!
