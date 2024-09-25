const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

// function add() {
// 	const enteredNumber = getUserNumberInput();
// 	const initialResult = currentResult;
// 	// HTML gives us strings, always. Therefore we need to convert it to a number.
// 	currentResult += enteredNumber;
// 	createAndWriteOutput("+", initialResult, enteredNumber);
// 	writeToLog("ADD", prevResult, operationNumber, currentResult);
// }

// function subtract() {
// 	const enteredNumber = getUserNumberInput();
// 	const initialResult = currentResult;
// 	currentResult -= enteredNumber;
// 	createAndWriteOutput("-", initialResult, enteredNumber);
// 	writeToLog("SUBTRACT", prevResult, operationNumber, currentResult);
// }

// function multiply() {
// 	const enteredNumber = getUserNumberInput();
// 	const initialResult = currentResult;
// 	currentResult *= enteredNumber;
// 	createAndWriteOutput("*", initialResult, enteredNumber);
// 	writeToLog("MULTIPLY", prevResult, operationNumber, currentResult);
// }

// function divide() {
// 	const enteredNumber = getUserNumberInput();
// 	const initialResult = currentResult;
// 	currentResult /= enteredNumber;
// 	createAndWriteOutput("/", initialResult, enteredNumber);
// 	writeToLog("DIVIDE", prevResult, operationNumber, currentResult);
// }

function calculate(operation) {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let operator;
	if (operation === "ADD") {
		currentResult += enteredNumber;
		operator = "+";
	} else if (operation === "SUBTRACT") {
		currentResult -= enteredNumber;
		operator = "-";
	} else if (operation === "MULTIPLY") {
		currentResult *= enteredNumber;
		operator = "*";
	} else {
		currentResult /= enteredNumber;
		operator = "/";
	}
	createAndWriteOutput(operator, initialResult, enteredNumber);
	writeToLog(operation, initialResult, enteredNumber, currentResult);
}

// Look at this function and execute it for me when a click occurs
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
