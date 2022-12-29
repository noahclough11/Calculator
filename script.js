const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');


function add(a,b){
    return a + b;
};
function subtract(a,b){
    return a - b;
};
function multiply(a, b){
    return a * b;
};
function divide(a, b){
    return a / b;
};

function operate(operandOne, operator, operandTwo){
    if (operator == '+'){
        add(operandOne, operandTwo);
    }
    else if (operator == '-'){
        subtract(operandOne, operandTwo);
    }
    else if (operator == '*'){
        multiply(operandOne,operandTwo);
    }
    else if (operator == '/'){
        if (operandTwo == '0'){
            return 'ERROR DIVIDE BY 0'
        }
        else{
            divide(operandOne, operandTwo);
        }
    }
}