const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const oneBut = document.querySelector('#one');
const twoBut = document.querySelector('#two');
const threeBut = document.querySelector('#three');
const fourBut = document.querySelector('#four');
const fiveBut = document.querySelector('#five');
const sixBut = document.querySelector('#six');
const sevenBut = document.querySelector('#seven');
const eightBut = document.querySelector('#eight');
const nineBut = document.querySelector('#nine');
const zeroBut = document.querySelector('#zero');
const equalsBut = document.querySelector('#equals');
const numButtons = document.querySelectorAll('.numButton');
const mainLine = document.querySelector('#mainLine');
const topLine = document.querySelector('#topLine');
const plusSign = document.querySelector('#plusSign');
const minusSign = document.querySelector('#minusSign');
const multiplySign = document.querySelector('#multiplySign');
const divideSign = document.querySelector('#divideSign');


tempArray = [];
result = 0
function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
}

function add(a,b){
    result = a+b;
    result = roundToTwo(result);
};
function subtract(a,b){
    result = a-b;
    result = roundToTwo(result);
};
function multiply(a, b){
    result = a*b;
    result = roundToTwo(result);
};
function divide(a, b){
    result = a/b;
    result = roundToTwo(result);
};

function operate(operandOne, operator, operandTwo){
    if (operator === '+'){
        add(operandOne, operandTwo);
    }
    else if (operator === '-'){
        subtract(operandOne, operandTwo);
    }
    else if (operator === '*'){
        multiply(operandOne,operandTwo);
    }
    else if (operator === '/'){
        if (operandTwo === '0'){
            return 'ERROR DIVIDE BY 0'
        }
        else{
            divide(operandOne, operandTwo);
        }
    }
    console.log(result);
}
let displayNum = '';
mainLine.textContent = displayNum;

oneBut.addEventListener('click', function() {
    displayNum += '1';
    mainLine.textContent = displayNum;
});
twoBut.addEventListener('click', function() {
    displayNum += '2';
    mainLine.textContent = displayNum;
});
threeBut.addEventListener('click', function() {
    displayNum += '3';
    mainLine.textContent = displayNum;
});
fourBut.addEventListener('click', function() {
    displayNum += '4';
    mainLine.textContent = displayNum;
});
fiveBut.addEventListener('click', function() {
    displayNum += '5';
    mainLine.textContent = displayNum;
});
sixBut.addEventListener('click', function() {
    displayNum += '6';
    mainLine.textContent = displayNum;
});
sevenBut.addEventListener('click', function() {
    displayNum += '7';
    mainLine.textContent = displayNum;
});
eightBut.addEventListener('click', function() {
    displayNum += '8';
    mainLine.textContent = displayNum;
});
nineBut.addEventListener('click', function() {
    displayNum += '9';
    mainLine.textContent = displayNum;
});
zeroBut.addEventListener('click', function() {
    displayNum += '0';
    mainLine.textContent = displayNum;
});

plusSign.addEventListener('click', function(){
    if (tempArray.length == 2) {
        tempArray.push(Number(displayNum));
        operate(tempArray[0], tempArray[1], tempArray[2]);
        tempArray = [];
        displayNum = result
        result = 0;
    }
    tempArray.push(Number(displayNum));
    tempArray.push('+')
    topLine.textContent = `${displayNum} +`;
    displayNum = '0'
    mainLine.textContent = displayNum;
    displayNum= '';   
})
minusSign.addEventListener('click', function(){
    if (tempArray.length == 2) {
        tempArray.push(Number(displayNum));
        operate(tempArray[0], tempArray[1], tempArray[2]);
        tempArray = [];
        displayNum = result
        result = 0;
    }
    tempArray.push(Number(displayNum));
    tempArray.push('-')
    topLine.textContent = `${displayNum} -`;
    displayNum = '0'
    mainLine.textContent = displayNum;
    displayNum= '';   
})
multiplySign.addEventListener('click', function(){
    if (tempArray.length == 2) {
        tempArray.push(Number(displayNum));
        operate(tempArray[0], tempArray[1], tempArray[2]);
        tempArray = [];
        displayNum = result
        result = 0;
    }
    tempArray.push(Number(displayNum));
    tempArray.push('*')
    topLine.textContent = `${displayNum} *`;
    displayNum = '0'
    mainLine.textContent = displayNum;
    displayNum= '';   
})
divideSign.addEventListener('click', function(){
    if (tempArray.length == 2) {
        tempArray.push(Number(displayNum));
        operate(tempArray[0], tempArray[1], tempArray[2]);
        tempArray = [];
        displayNum = result
        result = 0;
    }
    tempArray.push(Number(displayNum));
    tempArray.push('/')
    topLine.textContent = `${displayNum} /`;
    displayNum = '0'
    mainLine.textContent = displayNum;
    displayNum= '';   
})
equalsBut.addEventListener('click', function(){
    tempArray.push(Number(displayNum));
    operate(tempArray[0], tempArray[1], tempArray[2]);
    tempArray = [];
    displayNum = result
    result = 0;
    mainLine.textContent = displayNum;
})
clear.addEventListener('click', function(){
    tempArray = [];
    displayNum = '';
    mainLine.textContent= '';
    topLine.textContent= '';
})



