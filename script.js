const btnDigit = document.querySelectorAll('.digits');
const btnOperator = document.querySelectorAll('.operators');
const btnClear = document.getElementById('btn-clear');
const btnEqual = document.getElementById('btn-equal');
const para = document.getElementById('display');
let currentNum =[];
let currentOperator =[];

btnDigit.forEach(button =>{
    button.addEventListener('click', displayFunction)
});

btnOperator.forEach(button =>{
    button.addEventListener('click', displayOperator)
});

btnClear.addEventListener('click', clearDisplayData);
btnEqual.addEventListener('click', operate);

function sumNumbers(num1, num2){
    return String(para.textContent= num1*num2);
}

function operate(){
 currentNum[0] = sumNumbers(currentNum[0],currentNum[1]);

console.log(currentNum)
}

function displayFunction(number){
    para.textContent += this.textContent;
    let filtering = /\d/g;
    currentNum = para.textContent.match(filtering)

    console.log(currentNum)
};


function clearDisplayData(){ //need to add display's variable CLEAR
para.textContent = '';
currentNum = [];
}

function displayOperator(){
    para.textContent += this.textContent;

};
console.log(currentNum);
//KINDA HARD CODED xDDDDD
//NEED TO FILTER ONLY NUMBERS FROM PARA STRING USING REGEX
//!!!! HOW TO STORE THE VALUEEEE