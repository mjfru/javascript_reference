//! Modular JavaScript Quiz

/* 
? 1. Why are JavaScript modules better than using multiple <script src="..."> imports?
* Each file specifies its dependencies, you don't need to manually micro-manage the correct order.

? 2. What's true about this export statement?
  export const myName = 'Matt';
* It's a 'named export' - exporting the constant with the value under the name 'myName'.

? 3. How can you import the following exports?
  export const myName = 'Max';
  export function greet() { ... }
* import * as personData from "./file.js"

? 4. When and how often does non-exported code in a module execute?
* Upon the first time a module gets imported into another file.
*/