const btnDigit = document.querySelectorAll('.digits');
const btnOperator = document.querySelectorAll('.operators');
const btnClear = document.getElementById('btn-clear');
const btnEqual = document.getElementById('btn-equal');
const para = document.getElementById('display');

//MAKE UNDO Function!
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
    let sum = ((num1)+(num2));
     
     currentNum =[];
     currentOperator = [];
     return [(para.textContent= sum.toFixed(2))];
};
function sumNegativeNumbers(num1, num2){
    let sumNegative = ((-num1)+(num2));

     currentNum =[];
     currentOperator = [];
     return [(para.textContent= sumNegative.toFixed(2))];
};

function subtractNumbers(num1, num2){
    let subtract = ((num1)-(num2));
   
    currentNum =[];
    currentOperator = [];
    return [(para.textContent= subtract.toFixed(2))];
};
function subtractNegativeNumbers(num1, num2){
    let subtractNegative = ((-num1)+(-num2));
    
     currentNum =[];
     currentOperator = [];
     return [(para.textContent= subtractNegative.toFixed(2))];
};

function multiplyNumbers(num1, num2){
    let multiply =((num1)*(num2));
  
     currentNum =[];
     currentOperator = [];
     return [(para.textContent= multiply.toFixed(2))];
};
function multiplyNegativeNumbers(num1, num2){
    let multiplyNegative = ((-num1)*(num2));

     currentNum =[];
     currentOperator = [];
     return [(para.textContent= multiplyNegative.toFixed(2))];
};
function divideNumbers(num1, num2){
    let divide = ((num1)/(num2));

     currentNum =[];
     currentOperator = [];
     return [(para.textContent= divide.toFixed(2))];
};

function divideNegativeNumbers(num1, num2){
    let divideNegative = ((-num1)/(num2));

     currentNum =[];
     currentOperator = [];
     return [(para.textContent= divideNegative.toFixed(2))];
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

      if(currentOperator == '+'){
        let filtering = /(?<=\+)[^\]]+/;
        currentNum.push(para.textContent.match(filtering).join(''));
          console.log(currentNum[0])
        sumNumbers(Number(currentNum[0]),Number(currentNum[1]));
     }

        else if((currentOperator[0] == '-') && (currentOperator[1] == '+')){
            let filtering = /(?<=\+)[^\]]+/;
            currentNum.push(para.textContent.match(filtering).join(''));
              console.log(currentNum[0])
            sumNegativeNumbers(Number(currentNum[0]),Number(currentNum[1]));   
        }
        else if((currentOperator[0] == '-') && (currentOperator[1] == '-')){
            let filtering = /(?<=\d-)[^\]]+/;
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
// + IGNORING any sign other than those
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
    
    para.textContent += this.textContent;
    let filtering = /[.\d]/g;
    currentNum.push(para.textContent.match(filtering).join(''));
    let filteringOperator =  /[+,*,/,-]/g;
    currentOperator = para.textContent.match(filteringOperator)
    console.log(currentNum)
    console.log(currentOperator)
};



// keyboard input support functions
function addNumberInput(){
    window.addEventListener('keydown', function(e){ 
            let filter = /[.\d]/g;
            let filteredNum = e.key.match(filter);
            if (filteredNum != null){
                para.textContent += filteredNum
            }
    }); 
};
 addNumberInput();

 function addOperatorInput(){
     let operatorInput = window.addEventListener('keydown', function(e){
        let filter = /[+,*,/,-]/g;
        let filteredOperator = e.key.match(filter);
        if (filteredOperator != null){
            console.log(e.key)
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
    para.textContent +=filteredOperator
    let filtering = /[.\d]/g;
    currentNum.push(para.textContent.match(filtering).join(''));
    let filteringOperator =  /[+,*,/,-]/g;
    currentOperator = para.textContent.match(filteringOperator)
            // let filter = /\d/g;
            // currentNum.push(para.textContent.match(filter).join(''));
            // currentOperator = filteredOperator;
            // console.log(currentNum)
            // console.log(currentOperator);
        }
     });
 }
 addOperatorInput();

 function lookEqualInput(){
 window.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
            operate()
        }
    }) 

 }
 lookEqualInput();

 function lookDeleteInput(){
window.addEventListener('keydown', function(e){
        if(e.key == 'Delete'){
            clearDisplayData()
        }

    })  
 }
 lookDeleteInput();

 // Preventing '/' to act as search command (on Mozilla Firefox)
 function preventDivideDefault(){
    window.addEventListener('keydown', function(e){
        if(e.key == '/'){
            e.preventDefault()

        }

 });
} preventDivideDefault();
