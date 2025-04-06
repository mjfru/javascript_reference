//! Type Casting: Overriding what TS assumes to be the type (2 ways)
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const buttonElement = document.querySelector("button");

// Assigning types to parameters:
function add(a: number, b: number) {
	return a + b;
}

//* TS will infer what this constant should hold (a number), you can manually declare it but it is not necessary.
const result = add(5, 3);

let isDone = false;

console.log(result);

// Function Types (parameters and return value):
function subtract(a: number, b: number): number {
	return a - b;
}

//* Void is used when there is nothing being returned (this is inferred here but still included for visibility)

//* Using 'any' gives up all the advantages of TS and is a last resort type.
//* This is also using a 'union' type, indicated by the '|'. This indicates that more than one type/input is acceptable.
function printResult(result: any, printMode: "console" | "alert"): void {
	if (printMode === "console") {
		console.log(result);
	} else if (printMode === "alert") {
		alert(result);
	}
}

// printResult(result);

//! Declaring arrays as type and declaring what kind of data it will/can receive
// let results: { res: number; print: () => void }[] = [];
//* The above is quite lengthy and hard to read; we can use type aliases to alleviate this:
type CalculationResults = { res: number; print: () => void }[];
const results: CalculationResults = [];

//! The '+' casts these as a number (otherwise they're strings because of the default behaviors of inputs):
buttonElement?.addEventListener("click", () => {
	const num1 = +num1Input.value;
	const num2 = +num2Input.value;
	const result = add(num1, num2);

	//! Declaring Objects as types
	const resultContainer = {
		res: result,
		print() {
			console.log(this.res);
		},
	};
	// printResult(resultContainer.res);
	// results[0].print();

	results.push(resultContainer);

	printResult(result, "console");
	printResult(result, "alert");
});
