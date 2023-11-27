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

//Organizing the screen display section
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

digitBtn.forEach(Btn => {
  Btn.addEventListener('click', () => {
    num = Btn.textContent;
    updateNum();
    subsequentNum = Btn.textContent;
    updateSubsequentNum();
    //console.log(num);
    //console.log(subsequentNum);
  })
})

operatorBtn.forEach(Btn => {
  Btn.addEventListener('click', () => {
    operator = Btn.textContent;
    //console.log(operator);
    updateOperator();
  })
})

function updateNum() {
  return calculation.textContent = `${num} + 0`;
}

function updateOperator() {
  return calculation.textContent = `${num} ${operator} 0`;
}

function updateSubsequentNum() {
  return calculation.textContent = `${num} ${operator} ${subsequentNum}`;
}