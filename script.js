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
const btnOne = document.querySelector('#btn-one');
btnOne.addEventListener('click', () => {
  display.textContent += btnOne.textContent;
});

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', () => {
  display.textContent = '';
});