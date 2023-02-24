const calculator = document.querySelector(".calculator");
const keyboard = calculator.querySelector(".keyboard");
const result = document.querySelector(".screen-result");
const operators = document.querySelectorAll(".operator");

// define actions, inclue add, subtract, multiply, divide, decimal, clear, calculate
const actions = {
  add: "add",
  subtract: "subtract",
  multiply: "multiply",
  divide: "divide",
  decimal : "decimal",
  clear : "clear",
  calculate : "calculate"
};

//  define status of calculation state
const calculationState = {
  operator: "operator",
  number: "number"
}

const setPropperties = calculator.dataset //

let previousKeyType = setPropperties.previousKeyType; //add properties for DomElement


// listen event onClick when click keyboard
keyboard.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = result.textContent;

    if (
      action === actions.add || action === actions.subtract || action === actions.multiply ||
      action === actions.divide
    ) {
      previousKeyType = calculationState.operator;
      setPropperties.firstValue = displayedNum;
      setPropperties.operator = action;
    }else if(action === actions.decimal) {
      result.textContent = displayedNum + ".";
      setPropperties.previousKey = actions.decimal;
    }else if(action === actions.clear) {
      result.textContent = 0;
      previousKeyType = actions.clear;
    }else if (action === actions.calculate) {
      const firstValue = setPropperties.firstValue;
      const operator = setPropperties.operator;
      const secondValue = displayedNum;
      result.textContent = calculate(firstValue, operator, secondValue);
      previousKeyType = actions.calculate;
    }
    if (!action) {
      if (displayedNum === "0" || previousKeyType === calculationState.operator) {
        result.textContent = keyContent;
        setPropperties.previousKey = calculationState.number;
      } else {
        result.textContent = displayedNum + keyContent;
      }
    }
  }
});


// function to calculate
const calculate = (n1, operator, n2) => {
  let result = "";
  if (operator === actions.add) {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === actions.subtract) {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === actions.multiply) {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === actions.divide) {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
};
