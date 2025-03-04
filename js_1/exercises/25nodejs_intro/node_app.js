//! Working with HTTP Requests

// Allows us to work with HTTP requests
const http = require("http");

const server = http.createServer((request, response) => {
	// Parsing the request
	let body = [];
	// console.log(request.method, request.url);
	request.on("data", (chunk) => {
		body.push(chunk);
	});
	request.on("end", () => {
		body = Buffer.concat(body).toString();
		console.log(body);
		let userName = 'New User'
    if (body) {
      userName = body.split("=")[1];
    }
		response.setHeader("Content-Type", "text/html");
		response.write(`<h1>Hello there, ${userName}!</h1>`),
			response.write(
				"<form method='POST' action='/'><input name='username' type='text'><button type='submit'>Send</button></form>"
			);
		response.end();
	});
});

// Specify the port you want to use:
server.listen(3000);
