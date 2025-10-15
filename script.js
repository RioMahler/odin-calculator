let buttons = document.querySelectorAll("button");

let display = document.querySelector("p");

buttons.forEach((button) => button.addEventListener("click", operate));
let clear = document
  .querySelector("#clear")
  .addEventListener("click", clearOut);

let calculation = [];

function operate(button) {
  if (
    (button.target.innerText == "=" &&
      calculation[calculation.length - 1] != " ") ||
    (button.target.classList == "operators" &&
      (calculation.includes("÷") ||
        calculation.includes("+") ||
        calculation.includes("-") ||
        calculation.includes("x")) &&
      calculation[calculation.length - 1] != " ")
  ) {
    let calculate = calculation.join("");
    let maths = calculate.split(" ");

    if (calculation.includes("+")) {
      add(maths[0], maths[2]);
      if (button.target.innerText != "=") {
        calculation.push(" ");
        calculation.push(button.target.innerText);
        calculation.push(" ");
      }
      display.innerText = calculation.join("");
    } else if (calculation.includes("-")) {
      subtract(maths[0], maths[2]);
      if (button.target.innerText != "=") {
        calculation.push(" ");
        calculation.push(button.target.innerText);
        calculation.push(" ");
      }
      display.innerText = calculation.join("");
    } else if (calculation.includes("x")) {
      mulitply(maths[0], maths[2]);
      if (button.target.innerText != "=") {
        calculation.push(" ");
        calculation.push(button.target.innerText);
        calculation.push(" ");
      }
      display.innerText = calculation.join("");
    } else if (calculation.includes("÷")) {
      divide(maths[0], maths[2]);
      if (button.target.innerText != "=") {
        calculation.push(" ");
        calculation.push(button.target.innerText);
        calculation.push(" ");
      }
      display.innerText = calculation.join("");
    }
  } else if (display.innerText == "YOU FOOL") {
    display.innerText = button.target.innerText;
    calculation.push(button.target.innerText);
  } else if (
    button.target.classList == "operators" &&
    calculation[calculation.length - 1] != " "
  ) {
    calculation.push(" ");
    calculation.push(button.target.innerText);
    calculation.push(" ");
    display.innerText = calculation.join("");
  } else if (
    button.target.classList != "operators" &&
    button.target.innerText != "="
  ) {
    calculation.push(button.target.innerText);
    display.innerText = calculation.join("");
  } else return;
}

function add(numOne, numTwo) {
  let numberOne = parseFloat(numOne);
  let numberTwo = parseFloat(numTwo);
  display.innerText = numberOne + numberTwo;
  calculation = [];
  calculation.push(numberOne + numberTwo);
}

function subtract(numOne, numTwo) {
  let numberOne = parseFloat(numOne);
  let numberTwo = parseFloat(numTwo);
  display.innerText = numberOne - numberTwo;
  calculation = [];
  calculation.push(numberOne - numberTwo);
}

function mulitply(numOne, numTwo) {
  let numberOne = parseFloat(numOne);
  let numberTwo = parseFloat(numTwo);
  display.innerText = numberOne * numberTwo;
  calculation = [];
  calculation.push(numberOne * numberTwo);
}

function divide(numOne, numTwo) {
  let numberOne = parseFloat(numOne);
  let numberTwo = parseFloat(numTwo);
  if (numberTwo == 0 || numberOne == 0) {
    display.innerText = "YOU FOOL";
    calculation = [];
  } else {
    display.innerText = numberOne / numberTwo;
    calculation = [];
    calculation.push(
      Math.round((numberOne / numberTwo + Number.EPSILON) * 100000) / 100000
    );
  }
}

function clearOut() {
  calculation = [];
  display.innerText = "";
}
