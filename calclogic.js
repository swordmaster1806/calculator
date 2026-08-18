let operator;
let operand1;
let operand2;

let digitarray = [];

let op1Written = false;
let op2Written = false;
let operandWritten = false;
let result = 0;

const digits = document.querySelector(".digits");
const display = document.querySelector(".display");
const operatorSelected = document.querySelector(".operator");


function operate(opeerand1, operand, operrand2) {

    switch (operand) {

        case '+': return operand1 + operand2
        case '-': return operand1 - operand2
        case '*': return operand1 * operand2
        case '/': return operand1 / operand2

        default: return undefined;

    };
}



digits.addEventListener("click", (event) => {
    digitarray.push(event.target.textContent)

    op1Written = true;

    if (operandWritten) op2Written = true;
});


operatorSelected.addEventListener("click", (event) => {


    if (op1Written && !op2Written && event.target.textContent !== "=") {

        if(!operandWritten){
         operand1 = +digitarray.join('');
         digitarray = [];       
        }

        operandWritten = true; 
        operator = event.target.textContent;

    }

    else if (op2Written) {

        operand2 = +digitarray.join('');
        result = operate(operand1, operator, operand2);
        console.log(result);

        operand1 = result;
      

        digitarray = `${operand1}`.split('');
       
        

        op2Written = false;
        operandWritten = false;

        if (event.target.textContent !== "=") {
            operator = event.target.textContent;
            operandWritten = true;
        }

    }

})



