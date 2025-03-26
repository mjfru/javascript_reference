//! Express JS: Intro - A Middleware Driven Framework

// Import it!
const express = require("express");
// And body-parser
const bodyParser = require("body-parser");

// From that, you get a function, let's store it:
const app = express();

// Using our templating engine, EJS:
app.set("view engine", "ejs");
// Pointing to the folder that will hold our EJS templates:
app.set("views", "views");

// .use() takes a function as an argument, getting the request, response, and next.
//* Order matters when using multiple methods with express!
//? Using body-parser to parse data in a simpler manner:
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader("Content-Type", "text/html");
	next(); //* We're not done yet, go to the next function and continue going until you don't see another .next().
});

app.use((req, res, next) => {
	const username = req.body.username || "New User";
  //! Moved an corrected in index.ejs template
	// res.send(
	// 	`<h1>Hi ${username}</h1><form method="POST" action="/"><input name="username" type="text"/>`
	// );
  res.render('index', {
    // Providing the username property here, essentially what will be passed from Express to the EJS file we indicated:
    username: username
  });
});

// This gives us all of Express's features, like setting up a server on a designated port for us behind the scenes:
app.listen(3000);
