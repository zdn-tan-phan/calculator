const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".keyboard");
const result = document.querySelector(".screen-result");
const operators = document.querySelectorAll(".operator");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    const keyContent = key.textContent;
    const displayedNum = result.textContent;

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === "decimal") {
      result.textContent = displayedNum + ".";
      calculator.dataset.previousKey = "decimal";
    }
    if (action === "clear") {
		result.textContent = 0;
		calculator.dataset.previousKeyType = "clear";
    }

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      result.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKeyType = "calculate";
    }
    const previousKeyType = calculator.dataset.previousKeyType;
    if (!action) {
      if (displayedNum === "0" || previousKeyType == "operator") {
        result.textContent = keyContent;
		calculator.dataset.previousKey = "number";
      } else {
        result.textContent = displayedNum + keyContent;
      }
    }
  }
});

const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
};
