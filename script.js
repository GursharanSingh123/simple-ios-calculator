// selectors
const clearBtn = document.querySelector(".allClear_btn");
const signToggleBtn = document.querySelector(".plusMinus_btn");
const percentageBtn = document.querySelector(".percentage_btn");
const divideBtn = document.querySelector(".divide_btn");
const multiplyBtn = document.querySelector(".multiply_btn");
const minusBtn = document.querySelector(".minus_btn");
const plusBtn = document.querySelector(".plus_btn");
const equalBtn = document.querySelector(".equal_btn");
const calculatorKeyArea = document.querySelector(".calculator_keys");
const resultContainer = document.querySelector(".result");
const allOperators = document.querySelectorAll(".operator_btn");
let valArray = [];
let arrOperator = [];
let countChecker = 0;
let countStorer;
// functions
function arithematicOperations(e) {
  const targ = e.target.closest(".operator_btn");
  // console.log(targ.value);
  if (countChecker === countStorer) {
    arrOperator.pop();
    arrOperator.push(targ.value);
  }
  countStorer = countChecker;
  arrOperator.push(targ.value);
  valArray.push(+resultContainer.innerText);
  if (valArray.length >= 2) {
    switch (arrOperator[0]) {
      case "plus":
        valArray[0] = valArray[0] + valArray[1];
        break;
      case "minus":
        valArray[0] = valArray[0] - valArray[1];
        break;
      case "divide":
        valArray[0] = valArray[0] / valArray[1];
        break;
      case "multiply":
        valArray[0] = valArray[0] * valArray[1];
        break;
    }
    valArray.pop();
    arrOperator.shift();
    // console.log(arrOperator);

    // console.log(valArray.length);
  }
  allOperators.forEach((btn) => {
    btn.style.color = "var(--color-text)";
    btn.style.backgroundColor = "var(--color-operatorBtn)";
  });
  targ.style.color = "var(--color-operatorBtn)";
  targ.style.backgroundColor = "var(--color-text)";
}
// eventListners
clearBtn.addEventListener("click", function () {
  resultContainer.innerText = "0";
});
signToggleBtn.addEventListener("click", function () {
  let val = resultContainer.innerText;
  resultContainer.innerText = val >= 0 ? `-${+val}` : `${Math.abs(+val)}`;
});
divideBtn.addEventListener("click", arithematicOperations.bind(this));
multiplyBtn.addEventListener("click", arithematicOperations.bind(this));
minusBtn.addEventListener("click", arithematicOperations.bind(this));
plusBtn.addEventListener("click", arithematicOperations.bind(this));
calculatorKeyArea.addEventListener("click", function (e) {
  if (!e.target.classList.contains("num_btn")) return;
  const val = e.target.value;
  console.log(val);
});
