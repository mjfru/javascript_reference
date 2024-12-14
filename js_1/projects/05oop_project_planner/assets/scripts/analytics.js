console.log("Sending analytics...");

//! Setting an interval (repeating) timer (function, every X milliseconds, array of arguments)
const intervalId = setInterval(() => {
	console.log("Sending analytics data...");
}, 2000);

document
.getElementById("stop-analytics-button")
.addEventListener("click", () => {
  clearInterval(intervalId);
});