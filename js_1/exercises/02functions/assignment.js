const task3Element = document.getElementById("task-3");

//TODO Create two functions: One that takes NO parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.

function showSimpleAlert() {
	alert("Event triggered!");
}

const showCustomAlert = (name) => {
	alert(name);
};

//TODO Call both functions directly from your code
// showSimpleAlert();
// showCustomAlert("Matt");

//TODO Add an event listener to taskElement and attach it to the first function (the one w/o arguments). Click this task thereafter for verification
task3Element.addEventListener("click", showSimpleAlert);

//TODO Add a brand-new function that takes 3 parameters (strings) and returns one combined string.
function stringCombiner(str1, str2, str3) {
  return `${str1} ${str2} ${str3}`
}

//TODO Call the new function and alert() the result.
alert(stringCombiner("You", "are", "welcome!"));