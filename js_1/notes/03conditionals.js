/*
! Conditional Code in JavaScript
* 'if' statements are core constructs that require some condition that equates to a boolean value (true / false) and runs some code depending on the result.
    if (condition) {
      doThis();
      OR
      variable = thisThing
    }

? Boolean Operators:
  ==          - Checks for value equality -       e.g. a == b
  !=          - Checks for value inequality       e.g. a != b
  === and !== - Checks for value & type equality  e.g. a === b / a !== b
*  (The above is preferred over ==)
  > & <       - Checks for greater / less         e.g. a > b, b < a
  >= & <=     - Checks for equal & greater / less e.g. a >= b
  !           - Checks if NOT true                e.g. !a

! Beware of Objects & Arrays in Comparisons
{ name: "Matt" } === { name: "Matt" }
* These will be FALSE, despite looking identical.

! Combining Conditions
* && - and - both conditions must be true
* || - or - one of these must be true

Parentheses can be added to make more complex conditions
(a === b && c === d) || (d === e || e === f)

! Falsy & Truthy Values
* JS Conditions work with Booleans (true / false) or w/ "falsy" and "truthy" values.
const nameInput = "Matt"
if(nameInput) {...} <--- this will run because a string equates to a boolean value, regardless of what it is.

? For numbers, 0 is the ONLY falsy value, even negative values are truthy.
? For objects and arrays, they are always "truthy"
? null, undefined, and NaN are falsy.

! Ternary Operator
* While if statements return no values, ternary operators are capable of this!

? Syntax: const userName = isLogin ? 'Matt' : null
Your condition ? ValueIfTrue : ElseValue/IfFalse

! Booleans & Logical Operators:
* Boolean coercion via double NOT operator - !!
Essentially a type conversion trick.

* Default value assignment via OR operator - ||
e.g. const name = someInput || 'Matt"; equates to the first truthy value

* Use if condition is true via AND operator - &&
e.g. const name = isLoggedIn && 'Matt'; 'Matt' is set if isLoggedIn is true.

! Switch Statements
* Good replacements for conditionals IF there are many if...else blocks.
switch (event)
  case condition1: 
    doThis()
    break;
  case conditional2:
    doThat()
    break;
  default:
    doThisInCaseNothingElseIsMet();
*/
