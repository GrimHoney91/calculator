const operand1 = document.querySelector('#operand1');
const mathSymbol = document.querySelector('#operator');
const operand2 = document.querySelector('#operand2');
const result = document.querySelector('#result');

let operator = null;
let op1 = "";
let op2 = "";

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        console.log(e.target.dataset.selection);
        if (operator == null) {
            if ((e.target.dataset.selection == '.') && (op1 == "")) {
                op1 += "0.";
                operand1.textContent = op1;
                result.textContent = '';
            }
            else if (e.target.dataset.selection != '.') {
                op1 += e.target.dataset.selection;
                operand1.textContent = op1;
                result.textContent = '';
            }
            else if (e.target.dataset.selection == '.') {
                if (op1.includes('.')) {

                }
                else {
                    op1 += e.target.dataset.selection;
                    operand1.textContent = op1;
                    result.textContent = '';
                }
            }
        }
        else {
            if ((e.target.dataset.selection == '.') && (op2 == "")) {
                op2 += "0.";
                operand2.textContent = op2;
                }
            else if (e.target.dataset.selection != '.') {
                op2 += e.target.dataset.selection;
                operand2.textContent = op2;
                }
            else if (e.target.dataset.selection == '.') {
                if (op2.includes('.')) {
    
                }
            else {
                op2 += e.target.dataset.selection;
                operand2.textContent = op2;
                }
            }
        }
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((sign) => {
    sign.addEventListener('click', (e) => {
        let symbol = e.target.dataset.selection;
        if (op1 == '') {

        }
        else if ((operator != null) && (op2 == '')) {
            mathSymbol.textContent = symbol;
            operator = symbol;
        }
        else if (operator == null) {
        mathSymbol.textContent = symbol;
        operator = symbol;
        result.textContent = '';
        result.setAttribute('style', 'black');
        operand1.textContent = op1;
        }
        else if (operator != null) {
            operate();
            operator = symbol;
            mathSymbol.textContent = symbol;
            operand1.textContent = op1;
            clear2();
        }
    });
});

function add(a, b) {
    let sum = Math.round((a + b) * 10) / 10;
    result.textContent = sum;
    op1 = `${sum}`;
    return sum;
}
function subtract(a, b) {
    let difference = Math.round((a - b) * 10) / 10;
    op1 = `${difference}`;
    result.textContent = difference;
    return difference;
}
function multiply(a, b) {
    let product = Math.round((a * b) * 10) / 10;
    op1 = `${product}`;
    result.textContent = product;
    return product;
}
function divide(a, b) {
    let quotient = Math.round((a / b) * 10) / 10;
    if (b == 0) {
        result.textContent = 'ERROR';
        result.setAttribute('style', 'color: red');
        op1 = '';
    }
    else {
    op1 = `${quotient}`;
    result.textContent = quotient;
    }
    return quotient;
}

function operate() {
    let num1 = Number(op1);
    let num2 = Number(op2);
    if (operator == '+') {
        add(num1, num2);
    }
    else if (operator == '-') {
        subtract(num1, num2);
    }
    else if (operator == 'x') {
        multiply(num1, num2);
    }
    else if (operator == '/') {
        divide(num1, num2);
    }
    clear3();
}
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (op2 == '') {

    }
    else {
        operate();
    }
});

function clear() {
    operator = null;
    op1 = "";
    op2 = "";
    operand1.textContent = '';
    mathSymbol.textContent = '';
    operand2.textContent = '';
    result.textContent = '';
}
function clear2() {
    op2 = "";
    operand2.textContent = '';
    result.textContent = '';
}
function clear3() {
    operator = null;
    op2 = "";
    mathSymbol.textContent = '';
    operand1.textContent = '';
    operand2.textContent = '';
}
const clearAll = document.querySelector('#clear');
clearAll.addEventListener('click', clear);

function backspace() {
    if (operator == null) {
        op1 = op1.slice(0, op1.length - 1);
        operand1.textContent = op1;
        result.textContent = '';
    }
    else if ((operator != null) && (op2 == "")) {
        operator = null;
        mathSymbol.textContent = "";
    }
    else {
        op2 = op2.slice(0, op2.length - 1);
        operand2.textContent = op2;
    }
}

const clear1 = document.querySelector('#backspace');
clear1.addEventListener('click', backspace);