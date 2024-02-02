let num1 = "";
let num2 = "";
let op;
let clicked = false;
let first = true;

function add(number1, number2) {
    return +number1 + +number2;
}

function subtract(number1, number2) {
    return +number1 - +number2;
}

function multiply(number1, number2) {
    return +number1 * +number2;
}

function divide(number1, number2) {
    return +number1 / +number2;
}

function operate(number1, operator, number2) {
    switch (operator) {
        case "+": return add(number1, number2);
        case "-": return subtract(number1,number2);
        case "*": return multiply(number1,number2);
        case "/": return divide(number1,number2);
    }
}

const display = document.querySelector('.display');

const btnNum1 = document.querySelector('#b1');
const btnNum2 = document.querySelector('#b2');
const btnNum3 = document.querySelector('#b3');
const btnNum4 = document.querySelector('#b4');
const btnNum5 = document.querySelector('#b5');
const btnNum6 = document.querySelector('#b6');
const btnNum7 = document.querySelector('#b7');
const btnNum8 = document.querySelector('#b8');
const btnNum9 = document.querySelector('#b9');
const btnNum0 = document.querySelector('#b0');

const btnClear = document.querySelector('#bclear');

const btnAdd = document.querySelector('#add');
const btnSub = document.querySelector('#sub');
const btnMul = document.querySelector('#mul');
const btnDiv = document.querySelector('#div');

const btnEqual = document.querySelector('#bequal');

btnAdd.addEventListener('click', () => {
    
    clicked = true;
    op ="+";
})

btnSub.addEventListener('click', () => {
    
    clicked = true;
    op ="-";
})

btnMul.addEventListener('click', () => {
    
    clicked = true;
    op ="*";
})

btnDiv.addEventListener('click', () => {
    
    clicked = true;
    op ="/";
})

btnEqual.addEventListener('click', () => {
    let result = operate(num1,op,num2);
    display.textContent=result;
    num1 = result;
})

const arNumber = [btnNum0,btnNum1,btnNum2,btnNum3,btnNum4,btnNum5,btnNum6,btnNum7,btnNum8,btnNum9];

for (let i = 0; i <= 9 ; i++) {
    arNumber[i].addEventListener('click', function() {
        displayNumber(arNumber[i]);
    })
}

btnClear.addEventListener('click', () => {
    display.textContent="";
    num1="";
    num2="";
    op="";
    first = true;
    clicked = false;
})

function displayNumber(btn) {
    if (clicked) {
        if (first) {
            display.textContent="";
            first = false;
        }
        display.textContent+=btn.textContent;
        num2 += btn.textContent;
    }
    else {
        display.textContent+=btn.textContent;
        num1 += btn.textContent;
    }
    
}


