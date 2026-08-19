let operator;
let operand1;
let operand2;

let digitarray = [];

let op1Written = false;
let op2Written = false;
let operandWritten = false;
let result = 0;
let decimalPresent = false;

const display = document.querySelector(".display");

const calc = document.querySelector("div");


function operate(opeerand1, operand, operrand2) {

    switch (operand) {

        case '+': return operand1 + operand2
        case '-': return operand1 - operand2
        case '*': return operand1 * operand2
        case '/': return operand1 / operand2

        default: return undefined;

    };
}





calc.addEventListener("click", (event) => {

    if (event.target.classList[0] === "operator") {

        if (event.target.textContent === "clear") {
            operator = undefined;
            operand1 = undefined;
            operand2 = undefined;
            op1Written = false;
            op2Written = false;
            operandWritten = false;
            decimalPresent = false;
            digitarray = [];

        }

        else if (op1Written && !op2Written && event.target.textContent !== "=") {


            if (!operandWritten) {
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
                digitarray = [];

            }
        }
    }

    else if(event.target.matches("button")){

    if(event.target.textContent === '.'){ 

        if(!decimalPresent){
        decimalPresent = true;
        digitarray.push(event.target.textContent)
        }
        
    }


    else{
    digitarray.push(event.target.textContent)
    }
    
    op1Written = true;
    if (operandWritten) op2Written = true;
    }

});




document.body.addEventListener("click", () => {
    let text = "";

    if (op1Written && !operandWritten) text = `${digitarray.join('')}`;

    else if (op1Written && !op2Written) text = `${operand1}` + " " + `${operator}`;

    else if (op1Written && op2Written && event.target.classList != "operator") text = `${operand1}` + " " + `${operator}` + " " + `${digitarray.join('')}`;

    else if (op1Written && op2Written && event.target.classList != "operator") {
        if (event.target.textContent === "=") text = `${result}`;
        else text = `${result} + " " + ${operator}`
    }

    display.textContent = text;

    let s = display.textContent.split('');

    decimalPresent = false;
    s.forEach((char) => {
        if(char == ".")decimalPresent = true;
    })


})