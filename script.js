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

function remainder(a, b) {
  return a  % b;
}

function operate(operator, a, b) {
  switch (operator) {

    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case '×':
      return multiply(a ,b);

    case '÷':
      return divide(a, b);

    case '%':
      return remainder(a, b);

    default:
      return null;
  }
}

const digitBtn = document.querySelectorAll('.digit');
const operatorBtn = document.querySelectorAll('.operator');

const screen = document.querySelector('.screen');
const calculation = document.createElement('div');
const result = document.createElement('div');
calculation.textContent = '0 + 0';
result.textContent = 0;

screen.appendChild(calculation);
screen.appendChild(result);

calculation.className = 'calculation';
result.className = 'result';

let num = 0;
let operator = '+';
let subsequentNum = 0;