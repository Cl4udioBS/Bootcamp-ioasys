const op = require('./src/functions');
const readlineSync = require('readline-sync');

function calculator(){
  console.log("\t C A L C U L A T O R");
  let firstNumber = 0;      
  do{
    let operation = readlineSync.question('Choose an operation: \n \t [+] [-] [*] [/] \n\t Press E to exit \n');
    firstNumber = parseFloat(readlineSync.question('\nInsert the first number: '));
    let secondNumber = parseFloat(readlineSync.question('\nInsert the second number: '));
    if(operation == '+'){
      op.addNumber(firstNumber,secondNumber);
    }else if(operation == '-'){
      op.subNumber(firstNumber,secondNumber);
    }else if(operation == '*'){
      op.multNumber(firstNumber,secondNumber);
    }else if(operation == '/'){
      op.divNumber(firstNumber,secondNumber);
    }
  } while((firstNumber||operation||secondNumber) !== ('E'||'e'));  
   
}

calculator();