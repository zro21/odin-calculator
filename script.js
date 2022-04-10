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

const buttonsNumber = document.querySelectorAll('button.btn-number');
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
let result = 0;
buttonEquals.addEventListener('click', () => {
  numberSecond = Number(display.textContent);
  if (operator === '/' && numberSecond === 0) {
    display.textContent = 'Divison by 0. Start again!';
  } else {
    result = operate(operator, numberFirst, numberSecond);
    if (Number.isInteger(result) === false) {
      result = result.toFixed(8);
    }
    display.textContent = result;
    numberFirst = '';
  }
});

const buttonClear = document.querySelector('#btn-clear');
buttonClear.addEventListener('click', () => {
  display.textContent = '';
  operator = '';
  numberFirst = '';
  numberSecond = '';
});

const buttonDelete = document.querySelector('#btn-del');
buttonDelete.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, display.textContent.length - 1);
})

const buttonNegative = document.querySelector('#btn-negative');
buttonNegative.addEventListener('click', () => {
  if (!display.textContent.includes('-')) {
    display.textContent = '-' + display.textContent;
  } else {
    display.textContent = display.textContent.slice(1);
  }
})