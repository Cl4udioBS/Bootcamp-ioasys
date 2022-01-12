module.exports = {
  addNumber (number, number2) {
    const result = number + number2;
    return console.log(`Result: ${result}\n`);
  },
  subNumber (number, number2) {
    const result = number - number2;
    return console.log(`Result: ${result}\n`);
  },
  multNumber (number, number2) {
    const result = number * number2;
    return console.log(`Result: ${result}\n`);
  },
  divNumber (number, number2) {
    if (number2 > 0) {
      const result = number / number2;
      return console.log(`Result: ${result}\n`)
    }else{
      throw new Error("I cant do a division by zero. :( ");      
    }
  }
};