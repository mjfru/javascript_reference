//* DOM ELEMENTS
const startAddButton = document.getElementById("add-btn");
const modal = document.querySelector("#add-modal");
const backdrop = document.querySelector("#backdrop");
const cancelAddMovieButton = modal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = modal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
	if (movies.length === 0) {
		entryText.style.display = "block";
	} else {
		entryText.style.display = "none";
	}
};

const closeMovieDeletionModal = () => {
	toggleBackdrop();
	deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
	let movieIndex = 0;
	for (const movie of movies) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex, 1);
	const listRoot = document.getElementById("movie-list");
	listRoot.children[movieIndex].remove();
	closeMovieDeletionModal();
  updateUI();
};

const deleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add("visible");
	toggleBackdrop();
	const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
	let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

	confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

	confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

	confirmDeletionButton.removeEventListener("click", closeMovieDeletionModal);

	cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
	confirmDeletionButton.addEventListener(
		"click",
		deleteMovie.bind(null, movieId)
	);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
	const newMovieElement = document.createElement("li");
	newMovieElement.className = "movie-element";
	newMovieElement.innerHTML = `
    <div class='movie-element__image'>
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

	newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));

	const listRoot = document.getElementById("movie-list");
	listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
	backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
	modal.classList.remove("visible");
};

const showMovieModal = () => {
	modal.classList.add("visible");
	toggleBackdrop();
};

const cancelAddMovieHandler = () => {
	closeMovieModal();
	toggleBackdrop();
	clearMovieInputs();
};

const clearMovieInputs = () => {
	for (const userInput of userInputs) {
		userInput.value = "";
	}
};

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imgUrlValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === "" ||
		imgUrlValue.trim() === "" ||
		ratingValue.trim() === "" ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert("Please enter valid values (rating must be between 1 and 5).");
		return;
	}
	const newMovie = {
		id: Math.random().toString(),
		title: titleValue,
		image: imgUrlValue,
		rating: ratingValue,
	};
	movies.push(newMovie);
	console.log(movies);
	closeMovieModal();
	toggleBackdrop();
	clearMovieInputs();
	renderNewMovieElement(
		newMovie.id,
		newMovie.title,
		newMovie.image,
		newMovie.rating
	);
	updateUI();
};

const backdropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
	clearMovieInputs();
};

startAddButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);