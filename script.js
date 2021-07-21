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

// takes operate's argument values and
// + returns the final value inside the para's content
// clears the inside value of currentNum and currentOperator.

function sumNumbers(num1, num2){
     [(para.textContent= (num1)+(num2))];
     currentNum =[];
     currentOperator = [];
};
function sumNegativeNumbers(num1, num2){
    [(para.textContent= (-num1)+(num2))];
     currentNum =[];
     currentOperator = [];
};

function subtractNumbers(num1, num2){
    [(para.textContent= (num1)-(num2))];
    currentNum =[];
    currentOperator = [];
};
function subtractNegativeNumbers(num1, num2){
    [(para.textContent= (-num1)+(-num2))];
     currentNum =[];
     currentOperator = [];
};

function multiplyNumbers(num1, num2){
     [(para.textContent= (num1)*(num2))];
     currentNum =[];
     currentOperator = [];
};
function multiplyNegativeNumbers(num1, num2){
    [(para.textContent= (-num1)*(num2))];
     currentNum =[];
     currentOperator = [];
};
function divideNumbers(num1, num2){
    [(para.textContent= (num1)/(num2))];
     currentNum =[];
     currentOperator = [];
};

function divideNegativeNumbers(num1, num2){
    [(para.textContent= (-num1)/(num2))];
     currentNum =[];
     currentOperator = [];
};

// trigers only on '=' button press 
// + OR any of the signs pressed
// + (ONLY IF there was already value inside the currentOperator)
// looks for the currentOperator's value if it matches any of the signs
// + filters the para's content taking ONLY 
// + the values after the currentOperator's value
// assigns the filtered number value to currentNumber variable
// calls for the execution function depending on the operator's sign
function operate(){
    //issue with negatives on currentNumber
      if(currentOperator == '+'){
        let filtering = /(?<=\+)[^\]]+/;
        currentNum.push(para.textContent.match(filtering).join(''));
          console.log(currentNum[0])
        sumNumbers(Number(currentNum[0]),Number(currentNum[1]));
     }
        //FILTERRRRRR DOES NOT FOCKEN WORK!!!!
        else if((currentOperator[0] == '-') && (currentOperator[1] == '+')){
            let filtering = /(?<=\+)[^\]]+/;
            currentNum.push(para.textContent.match(filtering).join(''));
              console.log(currentNum[0])
            sumNegativeNumbers(Number(currentNum[0]),Number(currentNum[1]));   
        }
        else if((currentOperator[0] == '-') && (currentOperator[1] == '-')){
            let filtering = /(?<=\-\d)[^\]]+/;
            currentNum.push(para.textContent.match(filtering).join(''));
              console.log(currentNum[0]);
              console.log(currentNum[1]);
            subtractNegativeNumbers(Number(currentNum[0]),Number(currentNum[1]));   
        }
        else if((currentOperator[0] == '-') && (currentOperator[1] == '*')){
            let filtering = /(?<=\*)[^\]]+/;
            currentNum.push(para.textContent.match(filtering).join(''));
              console.log(currentNum[0])
            multiplyNegativeNumbers(Number(currentNum[0]),Number(currentNum[1]));   
        }
        else if((currentOperator[0] == '-') && (currentOperator[1] == '/')){
            let filtering = /(?<=\/)[^\]]+/;
            currentNum.push(para.textContent.match(filtering).join(''));
              console.log(currentNum[0])
            divideNegativeNumbers(Number(currentNum[0]),Number(currentNum[1]));   
        }
     else if(currentOperator == '-'){
        let filtering = /(?<=\-)[^\]]+/;
        currentNum.push(para.textContent.match(filtering).join(''));
        subtractNumbers(Number(currentNum[0]),Number(currentNum[1]));
     }
     else if(currentOperator == '*'){
        let filtering = /(?<=\*)[^\]]+/;
        currentNum.push(para.textContent.match(filtering).join(''));
        multiplyNumbers(Number(currentNum[0]),Number(currentNum[1]));
     }
     else if(currentOperator == '/'){
        let filtering = /(?<=\/)[^\]]+/;
        currentNum.push(para.textContent.match(filtering).join(''));
        divideNumbers(Number(currentNum[0]),Number(currentNum[1]));
     }
    


console.log(currentNum)
console.log(currentOperator)
}

// adds the pressed button's text content inside
//+ the paragraph's textContent
function displayFunction(){ 
    para.textContent += this.textContent;
};


function clearDisplayData(){ 
para.textContent = '';
currentNum = [];
currentOperator = [];
}

// checks if the currentOperator has any of the 4 values assigned
// if not adds the pressed operator sign in the para's textContent
// filters for pattern that matches the paragraph's numbers and '.' only 
// + IGNORING any sign ohter than those
// then assigns the filtered paragraph's content in the currentNum variable
// then filters the paragraph's content again looking for any of the 4 operators
// assigns that filtered value to the currentOperator variable
function displayOperator(){
    if(currentOperator == '+' 
    || currentOperator == '-' 
    || currentOperator == '*' 
    || currentOperator == '/'){
        operate()
    }
    else if((currentOperator[0] == '-') && (currentOperator[1] == '+')
    || (currentOperator[0] == '-') && (currentOperator[1] == '-')
    || (currentOperator[0] == '-') && (currentOperator[1] == '*') 
    || (currentOperator[0] == '-') && (currentOperator[1] == '/')){
       operate() 
    }
    //issue with negatives on currentNumber
    para.textContent += this.textContent;
    let filtering = /[.\d]/g;
    currentNum.push(para.textContent.match(filtering).join(''));
    let filteringOperator =  /[+,*,/,-]/g;
    currentOperator = para.textContent.match(filteringOperator)
    console.log(currentNum)
    console.log(currentOperator)
};

// BUGS:

//, NEGATIVE VALUES (outgoing bug when working with 
// + negative value due to the '-' operator and spaghetti code)

//, DIVIDE by 0 BUG of INFINITY 
//(if 0 is being pressed after '/' operator para.textContent to be 0)