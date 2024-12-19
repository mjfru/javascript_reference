/*
! Events in JavaScript
Most languages have some 'events' trigger that allows a user to run code upon activation.
An upload finishing, a button being clicked, something being completed, etc.

In JavaScript, we use events in two different places:
? The Browser: addEventListener();
? The Server (Node): on();

* Typically, events transport data!
So far in this course, we've ignored the argument in addEventListener("...", event => ...)


! Browser Event Objects
- Mouse events might yield the coordinates of a cursor or contain information on the event target.
- The drag event might hold extra information which we can attach to a drag-and-drop interaction and also has an event target
- All events have an event target and their own special information specific to their own action.

* According to the instructor here, onclick events in the HTML nodes are antiquated. <button onclick="alert('Please log in')">...</button>

* Instead, they should be registered in the JS file and selected therein.

const button = document.querySelector('button');

const buttonClickHandler = () => {
  alert('Button was clicked!')
}

button.onclick = buttonClickHandler;

? The downside with this approach is that we can only add one function per element.

* Using .addEventListener() allows us to add multiple event listeners and utilize the .removeEventListener() method as well.

! DOM Events - Bubbling & Capturing
* Events in JS have two distinct phases: the capturing phase and the bubbling phase.


! Drag & Drop Events
- Elements need to be marked as 'draggable' (or have it set to true).
-- Listen to a 'dragstart' event; allowing us to describe the operation and append data.
--- Accept Drop via 'dragenter' and 'dragover' events => preventDefault();
---- Optional: Listen to a 'dragleave' event (update styles, etc.).
----- Listen to 'drop' event and update data / UI
------ Optional: Listen to 'dragend' event and update data / UI

*/
