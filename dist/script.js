const numberButtons = document.querySelectorAll("button[data-number]");
const operatorButtons = document.querySelectorAll("button[data-op]");
const equalsButton = document.querySelector("button[data-equals]");
const clearButton = document.querySelector("button[data-clear]");
const delButton = document.querySelector("button[data-del]");

const currInput = document.querySelector("#curr-input");
const prevInput = document.querySelector("#prev-input");

let currNum = "";
let prevNum = "";
let operator = "";
let result = "";

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currNum += btn.dataset.number;
    display(currInput, currNum);
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currNum === "") return;
    if (prevNum === "") {
      operator = btn.dataset.op;
      prevNum = getValueFrom(currNum, prevNum);
      display(prevInput, `${prevNum} ${operator}`);
      currNum = clearValue();
      clearDisplay(currInput);
      console.log(currNum);
    } else {
      result = operate(currNum, operator, prevNum);
      prevNum = clearValue();
      currNum = getValueFrom(result, currNum);
      clearDisplay(currInput);
      clearDisplay(prevInput);
      display(currInput, currNum);
    }
  });
});

equalsButton.addEventListener("click", () => {
  result = operate(currNum, operator, prevNum);
  prevNum = clearValue();
  currNum = getValueFrom(result, currNum);
  clearDisplay(currInput);
  clearDisplay(prevInput);
  display(currInput, currNum);
});

clearButton.addEventListener("click", () => {
  prevNum = clearValue();
  currNum = clearValue();
  clearDisplay(currInput);
  clearDisplay(prevInput);
});

delButton.addEventListener("click", () => {
  deleteFrom(currInput);
  currNum = deleteValueFrom(currNum);
});

function getValueFrom(target, currentValue) {
  if (target == "" || target == undefined || target == null) {
    return currentValue;
  } else {
    return target;
  }
}

function clearValue() {
  return "";
}

function display(target, value) {
  target.innerText = value;
}

function clearDisplay(target) {
  target.innerText = "";
}

function deleteFrom(targetDisplay) {
  targetDisplay.innerText = targetDisplay.innerText
    .split("")
    .slice(0, -1)
    .join("");

  console.log(targetDisplay);
}

function deleteValueFrom(targetValue) {
  return (targetValue = targetValue.split("").slice(0, -1).join(""));
}

function operate(number, operator, secondNumber) {
  if (operator === "+") {
    return +secondNumber + +number;
  } else if (operator === "-") {
    return +secondNumber - +number;
  } else if (operator === "*") {
    return +secondNumber * +number;
  } else if (operator === "/") {
    return +secondNumber / +number;
  }
}
