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
  switch (operator) {

    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case '×':
      return multiply(a ,b);

    case '÷':
      return divide(a, b);

    default:
      return null;
  }
}

// Organizing the screen display section
const digitBtn = document.querySelectorAll('.digit');
const operatorBtn = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const allClear = document.querySelector('.all-clear');

const screen = document.querySelector('.screen');
const calculation = document.createElement('div');
const result = document.createElement('div');
calculation.textContent = 0;
result.textContent = 0;

screen.appendChild(calculation);
screen.appendChild(result);

calculation.className = 'calculation';
result.className = 'result';

let num = 0;
let operator = '';
let subsequentNum = 0;
let answer = 0;
// Flag to determine whether num or subsequentNum is being entered
let isTypingNum = true;
// Flag to determine whether first operator or subsequent operator is being entered
let isFirstOperator = true;

digitBtn.forEach(Btn => {
  Btn.addEventListener('click', () => {
    if(isTypingNum) {
      // To enter double digits. Then converts to number from string using unary plus operator (+)
      num = +(num + Btn.textContent);
      updateNum();
    }
    else {
      // To enter double digits. Then converts to number from string using unary plus operator (+)
      subsequentNum = +(subsequentNum + Btn.textContent);
      updateSubsequentNum();
      isFirstOperator = false;
    }
  })
})

operatorBtn.forEach(Btn => {
  Btn.addEventListener('click', () => {
    if(isFirstOperator) {
      operator = Btn.textContent;
      isTypingNum = false;
      updateOperator();
    }
    else {
      answer = operate(operator, num, subsequentNum);
      num = answer;
      operator = Btn.textContent;
      subsequentNum = 0;
      isTypingNum = false;
      updateOperator();
    }
  })
})

equals.addEventListener('click', () => {
  answer = operate(operator, num, subsequentNum);
  updateAnswer();
})

allClear.addEventListener('click', reset);

function updateNum() {
  return calculation.textContent = `${num}`;
}

function updateOperator() {
  return calculation.textContent = `${num} ${operator}`;
}

function updateSubsequentNum() {
  return calculation.textContent = `${num} ${operator} ${subsequentNum}`;
}

function updateAnswer() {
  return result.textContent = `${answer}`;
}

function reset() {
  num = 0;
  operator = '';
  subsequentNum = 0;
  answer = 0;
  calculation.textContent = 0;
  result.textContent = 0;
  isTypingNum = true;
  isFirstOperator = true;
}