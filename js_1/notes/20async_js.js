/*
! Asynchronous JavaScript, Promises, and Callbacks
* JavaScript is single-threaded-- steps run in sequence, step-by-step and guarantees order.

? However, this can have a downside, especially if we have operations that take a while to complete.

console.log ---> setTimeout() ---> modeCode()

modeCode() won't run until the setTimeout() finishes, which could be any length of time!

Other examples of time-consuming operations in JS include: HTTP requests, getting user location, submission of a form, etc.

! The solution for this is using asynchronous code execution!
* This passes the time-consuming code to the browser to handle and our code can continue to run in sequence.
Callback functions allow what was passed into the browser to be reintegrated into JS's callstack.

! Event Loop, Queue, and Async Code
const greet = () => { console.log('hi') }      - Created
const showAlert = () => { alert('Danger!') }   - Created
setTimeout(showAlert, 2000);                    - Invoked, added to stack, passed to browser.
greet();                                        - Calls function ('hi')
                                                - Alert appears from the timeout.
*/
