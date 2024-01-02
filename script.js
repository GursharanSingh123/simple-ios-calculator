// selectors
const clearBtn = document.querySelector(".allClear_btn");
const signToggleBtn = document.querySelector(".plusMinus_btn");
const percentageBtn = document.querySelector(".percentage_btn");
const divideBtn = document.querySelector(".divide_btn");
const multiplyBtn = document.querySelector(".multiply_btn");
const minusBtn = document.querySelector(".minus_btn");
const plusBtn = document.querySelector(".plus_btn");
const equalBtn = document.querySelector(".equal_btn");
const numBtn = document.querySelectorAll(".num_btn");
const resultContainer = document.querySelector(".result");

// eventListners
clearBtn.addEventListener("click", function () {
  resultContainer.innerText = "0";
});
signToggleBtn.addEventListener("click", function () {
  let val = resultContainer.innerText;
  resultContainer.innerText = val >= 0 ? `-${+val}` : `${Math.abs(+val)}`;
});
percentageBtn.addEventListener("click", function () {});
