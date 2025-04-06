//! Type Casting: Overriding what TS assumes to be the type (2 ways)
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var buttonElement = document.querySelector("button");
// Assigning types to parameters:
function add(a, b) {
    return a + b;
}
//* TS will infer what this constant should hold (a number), you can manually declare it but it is not necessary.
var result = add(5, 3);
var isDone = false;
console.log(result);
// Function Types (parameters and return value):
function subtract(a, b) {
    return a - b;
}
//* Void is used when there is nothing being returned (this is inferred here but still included for visibility)
//* Using 'any' gives up all the advantages of TS and is a last resort type.
//* This is also using a 'union' type, indicated by the '|'. This indicates that more than one type/input is acceptable.
function printResult(result, printMode) {
    if (printMode === "console") {
        console.log(result);
    }
    else if (printMode === "alert") {
        alert(result);
    }
}
var results = [];
//! The '+' casts these as a number (otherwise they're strings because of the default behaviors of inputs):
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    //! Declaring Objects as types
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        },
    };
    // printResult(resultContainer.res);
    // results[0].print();
    results.push(resultContainer);
    printResult(result, "console");
    printResult(result, "alert");
});
