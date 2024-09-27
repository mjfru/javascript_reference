/* 
! The DOM & How to Manipulate It
* The Document Object Model (DOM)
The browser exposes the Web API to allow JS to work with the parsed document, aka, the DOM.
* In JS, we have various methods available to reach out and 'touch' the elements in the DOM.

const titleElement = querySelector('h1');

* The 'window' is another, broader object and represents the active browser window / tab.
It acts as global storage for script, also provides access to window-specific properties and methods.


* The 'document' is the root DOM node and provides access to element querying, DOM content, etc.


! Querying Elements
* querySelector(), getElementById()
  - Return single elements
  - Different ways of querying elements (by CSS selector, ID, etc.)
  - Direct reference to DOM element is returned

* querySelectorAll(), getElementsByTagName()
  - Return collections of elements (array-like objects): NodeList
  - Different ways of querying elements (by CSS selector, by tag name, by CSS class)
  - querySelectorAll() returns a non-live NodeList, getXbyY returns a live NodeList

? What are Nodes & Elements?
* Nodes:
  - The objects that make up the DOM
  - HTML tags are element nodes (or just 'elements')
  - Text creates 'text nodes'
  - Attributes create 'attribute nodes'

* Elements
  - Special properties and methods to interact with the elements
  - Available methods and properties depend on the kind of element
  - Can be selected in various different ways (via JS)
  - Can be created and removed via JavaScript

Examples of querying elements:

document.getElementById('main') // Selects only the element with an id of 'main'.
document.getElementsByClassName('list-item') // Selects all elements with the matching class name of 'list-item'.

* The most common and flexible way:
document.querySelector('.list-item')
document.querySelector('#main')

document.querySelectorAll('.list-item')
document.querySelector('ul li:first-of-type')

? You can also do something like this too:
const ul = document.querySelector('ul');
ul.querySelector('li');

! Manipulating Elements
<p id="welcome-text" class="text-default">Welcome!</p>

const p = document.getElementById("welcome-text");
? Reading:
  p.textContent = "Welcome"
  p.id = "welcome-text"
  p.className = "text-default"

? Manipulating:
  p.className = "next-class"
  p.textContent = "Hello there!"
  p.style.color = "white";
  p.style.backgroundColor = "black";

! Attributes vs. Properties:
* Often, but not always, attributes are mapped to properties and 'live sync' is set up.

* Attributes are placed in the HTML code, on element tags.
* If we store an HTML element in a JS variable, we can access properties through dot notation, which are automatically created on DOM objects.
  input.id
  input.className
  input.value

input.setAttribute("value", "another default text")

! Selecting Multiple Elements
const allListItems = document.querySelectorAll('li')
const allListItems = document.getElementsByTagName('li');
allListItems[2] =

for (const listItem of allListemItems) {
  console.log(listItem)
}
*/
