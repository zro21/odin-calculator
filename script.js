function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a ,b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  }
}

const display = document.querySelector('#display');

const buttonsNumber = document.querySelectorAll('.btn-number');
buttonsNumber.forEach(button => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
  })
});

const buttonsOperator = document.querySelectorAll('.btn-operator');
let operator = '';
let numberFirst = '';
buttonsOperator.forEach(button => {
  button.addEventListener('click', () => {
    operator = button.textContent;
    numberFirst = Number(display.textContent);
    display.textContent = '';
  })
});

const buttonEquals = document.querySelector('#btn-equals');
let numberSecond = '';
buttonEquals.addEventListener('click', () => {
  numberSecond = Number(display.textContent);
  display.textContent = '';
  display.textContent = operate(operator, numberFirst, numberSecond);
});

const buttonClear = document.querySelector('#btn-clear');
buttonClear.addEventListener('click', () => {
  display.textContent = '';
  operator = '';
  numberFirst = '';
  numberSecond = '';
});