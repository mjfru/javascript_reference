console.log("Hello there!");
// node app.js ---> 'Hello there!' in the console.

const userName = "user";

console.log(`Hi ${userName}!`);

// Using the file system
const fs = require("fs");

// (path to desired file, what we want to write)
fs.writeFile("user-data.txt", "username=Matt", (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Wrote to file!");
	}
});

fs.readFile('user-data.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log(data.toString());
  }
})