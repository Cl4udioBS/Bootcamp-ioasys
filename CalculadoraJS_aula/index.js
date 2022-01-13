const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Type a operation: ", (math) =>{
  try{
    const regex = new RegExp("(\\/0)+");

    if(regex.test(math)){
      throw "Division by zero is not allowed!";
    }
    const result = eval(math);
    console.info('Result =>', result);
  } catch(error) {
    console.error(error);
  }  

  rl.close();
});