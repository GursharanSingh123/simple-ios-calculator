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
let countStorer = 0;
// functions
function calculation() {
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
  valArray[0] = +parseFloat(`${valArray[0].toFixed(2)}`);
  valArray.pop();
  arrOperator.shift();
  // console.log(arrOperator);
}
function pushingVal() {
  countStorer = countChecker;
  valArray.push(+resultContainer.innerText);
}
function arithematicOperations(e) {
  if (valArray.length === 0 && resultContainer.innerText === "") {
    resultContainer.innerText = "ERROR";
    return;
  }
  const targ = e.target.closest(".operator_btn");
  // console.log(targ.value);
  if (countChecker === countStorer) {
    arrOperator.pop();
    arrOperator.push(targ.value);
  } else {
    arrOperator.push(targ.value);
    pushingVal();
    if (valArray.length >= 2) {
      calculation();
      // console.log(valArray.length);
    }
  }
  // console.log(valArray);
  colorreset();
  targ.style.color = "var(--color-operatorBtn)";
  targ.style.backgroundColor = "var(--color-text)";
  console.log(valArray, arrOperator, countChecker, countStorer);
}
function colorreset() {
  allOperators.forEach((btn) => {
    btn.style.color = "var(--color-text)";
    btn.style.backgroundColor = "var(--color-operatorBtn)";
  });
}
// eventListners
clearBtn.addEventListener("click", function () {
  resultContainer.innerText = "";
  valArray = [];
  arrOperator = [];
  countChecker = 0;
  countStorer = 0;
});
signToggleBtn.addEventListener("click", function () {
  let val = resultContainer.innerText;
  if (resultContainer.innerText === "0") return;
  resultContainer.innerText = val >= 0 ? `-${+val}` : `${Math.abs(+val)}`;
  if (valArray.length !== 0)
    valArray[valArray.length - 1] = -valArray[valArray.length - 1];
});
divideBtn.addEventListener("click", arithematicOperations.bind(this));
multiplyBtn.addEventListener("click", arithematicOperations.bind(this));
minusBtn.addEventListener("click", arithematicOperations.bind(this));
plusBtn.addEventListener("click", arithematicOperations.bind(this));
calculatorKeyArea.addEventListener("click", function (e) {
  if (!e.target.classList.contains("num_btn")) return;
  const val = e.target.value;
  // console.log(val);
  if (countChecker === countStorer) {
    resultContainer.innerText = val;
  } else {
    resultContainer.innerText = resultContainer.innerText + val;
  }
  countChecker++;
  console.log(e.target.value);
});
equalBtn.addEventListener("click", function () {
  pushingVal();
  // console.log(valArray, arrOperator, countChecker);
  calculation();
  console.log(valArray, arrOperator, countChecker, countStorer);
  // console.log(valArray[0]);
  resultContainer.innerText = parseFloat(`${valArray[0].toFixed(2)}`);
  colorreset();
  countChecker = 0;
  countStorer = 0;
});
// percentageBtn.addEventListener("click", function () {
//   valArray.push(+resultContainer.innerText);
//   if (valArray.length === 1) {
//     valArray[0] = valArray[0] / 100;
//   }
//   if (valArray.length === 2) {
//     switch (arrOperator[0]) {
//       case "plus":
//         valArray[0] = valArray[0] + (valArray[0] * valArray[1]) / 100;
//         break;
//       case "minus":
//         valArray[0] = valArray[0] - (valArray[0] * valArray[1]) / 100;
//         break;
//       case "divide":
//         valArray[0] = (valArray[0] / valArray[1]) * 100;
//         break;
//       case "multiply":
//         valArray[0] = (valArray[0] * valArray[1]) / 100;
//         break;
//     }
//     // valArray.pop();
//     arrOperator.shift();
//   }
//   console.log(valArray);
//   resultContainer.innerText = valArray[0];
//   valArray.pop();
//   colorreset();
//   // countChecker === countStorer;
// });
