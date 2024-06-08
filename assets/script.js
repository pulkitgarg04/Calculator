'use strict'

const display = document.getElementById('display');

function calculateResult() {
    let expression = display.value;
    let result;

    try {
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
        result = math.evaluate(expression);
        display.value = result;
    } catch (err) {
        display.value = "Error";
    }
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

