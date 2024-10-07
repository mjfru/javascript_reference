//TODO #1. Select this task (in two different ways at least!) and change the background-color to black, text-color to white.

const task = document.querySelector("#task-1");
task.style.color = "white";
task.style.backgroundColor = "black";

const task1 = document.getElementById("task-1")
task1.style.color = "white";
task1.style.backgroundColor = "black";

//TODO #2. Change the document title (in <head></head>) to "Assignment - Solved!". Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.

let title = document.querySelector("title");
title.textContent = "Assignment!!!!!"
document.title = "Assignment - Solved!"

//TODO #3. Select the <h1> element on this page and change its text to "Assignment - Solved!".
document.querySelector("h1").textContent = "Assignment - Solved!"