const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

// Allowing the player to choose what they'd like to play
const getPlayerChoice = function () {
	const selection = prompt(
		`${ROCK}, ${PAPER}, or ${SCISSORS}?`,
		""
	).toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT} for you.`);
		return DEFAULT;
	}
	return selection;
};

// Computer's choice
const getComputerChoice = function () {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

// Determining a win, loss, or draw
const getWinner = (computerChoice, playerChoice = DEFAULT) => {
	return computerChoice === playerChoice
		? RESULT_DRAW
		: (computerChoice === ROCK && playerChoice === PAPER) ||
		  (computerChoice === PAPER && playerChoice === SCISSORS) ||
		  (computerChoice === SCISSORS && playerChoice === ROCK)
		? RESULT_PLAYER_WINS
		: RESULT_COMPUTER_WINS;

	// if (computerChoice === playerChoice) {
	// 	return RESULT_DRAW;
	// } else if (
	// 	(computerChoice === ROCK && playerChoice === PAPER) ||
	// 	(computerChoice === PAPER && playerChoice === SCISSORS) ||
	// 	(computerChoice === SCISSORS && playerChoice === ROCK)
	// ) {
	// 	return RESULT_PLAYER_WINS;
	// } else {
	// 	return RESULT_COMPUTER_WINS;
	// }
};

startGameBtn.addEventListener("click", () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log("Game is starting...");
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChoice();
	// console.log(playerSelection);
	let winner;
	if (playerChoice) {
		winner = getWinner(computerChoice, playerChoice);
	} else {
    winner = getWinner(computerChoice);
  }

	let message;
	if (winner === RESULT_DRAW) {
		message = `You picked ${playerChoice || DEFAULT}, the computer picked ${computerChoice}. It's a draw!`;
	} else if (winner === RESULT_PLAYER_WINS) {
		message = `You picked ${playerChoice}, the computer picked ${computerChoice}. You win!`;
	} else {
		message = `You picked ${playerChoice}, the computer picked ${computerChoice}. You lost!`;
	}
	alert(message);
	gameIsRunning = false;
});


