const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
	const movieList = document.getElementById("movie-list");

	if (movies.length === 0) {
		movieList.classList.remove("visible");
	} else {
		movieList.classList.add("visible");
	}
	movieList.innerHTML = "";

	const filteredMovies = !filter
		? movies
		: movies.filter((movie) => movie.info.title.includes(filter));

	filteredMovies.forEach((movie) => {
		const movieElement = document.createElement("li");
		// if (!(movie.info === undefined)) {
		// }

		//? Destructuring for readability:
		const { info, ...otherProps } = movie;
		console.log(otherProps); // the id
		// const { title } = info;

    const { getFormattedTitle } = movie;
    //? When this function executes, bind() guarantees 'this' will refer to the movie object
    // getFormattedTitle = getFormattedTitle.bind(movie)

    //? Call is different from .bind(); .call() executes the function right away.
    //? .apply() takes only one additional argument, an array
		let text = getFormattedTitle.call(movie) + " - ";
		for (const key in info) {
			if (key !== "title") {
				text = text + `${key}: ${info[key]}`;
			}
		}
		movieElement.textContent = text;
		movieList.append(movieElement);
	});
};

const addMovieHandler = () => {
	const title = document.getElementById("title").value;
	const extraName = document.getElementById("extra-name").value;
	const extraValue = document.getElementById("extra-value").value;

	if (
		title.trim() === "" ||
		extraName.trim() === "" ||
		extraValue.trim() === ""
	) {
		return;
	}

	const newMovie = {
		info: {
			title,
			[extraName]: extraValue,
		},
		id: Math.random().toString(),
		getFormattedTitle() {
      console.log(this);
			// Refers to whatever calls this function in your code
			// Without the 'this', it would look outside the function's scope for a variable or constant called 'info'.
			return this.info.title.toUpperCase();
		},
	};

	movies.push(newMovie);
	renderMovies();
};

const searchMovieHandler = () => {
	const filteredTerm = document.getElementById("filter-title").value;
	renderMovies(filteredTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
