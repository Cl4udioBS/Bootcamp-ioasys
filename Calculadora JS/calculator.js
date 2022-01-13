const op = require('./src/functions');
const readlineSync = require('readline-sync');

function calculator(){
  console.log("\t C A L C U L A T O R");
  let firstNumber, secondNumber = 0; 
  let exit;

  do{
    let operation = readlineSync.question('Choose an operation: \n \t [+] [-] [*] [/] \n\n\t Press E to exit \n');
    

    if((operation === "E") || (operation === "e")){
      console.log('\n Leaving Calculator. .  .\n');
      exit = 0;  
      
    }else{
      firstNumber = parseFloat(readlineSync.question('\nInsert the first number: '));
      secondNumber = parseFloat(readlineSync.question('\nInsert the second number: '));
      if(operation == '+'){
        op.addNumber(firstNumber,secondNumber);
      }else if(operation == '-'){
        op.subNumber(firstNumber,secondNumber);
      }else if(operation == '*'){
        op.multNumber(firstNumber,secondNumber);
      }else if(operation == '/'){
        op.divNumber(firstNumber,secondNumber);
      }else{
        console.log("\nInvalid opertation!\n");
      }
    }
  } while(exit!= 0); 
}

calculator();