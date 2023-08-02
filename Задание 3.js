function firstNumber(x) {
    return function secondNumber(y) {
      const sum = x + y;
      return sum;
    }
  }
  
  console.log(firstNumber(5)(3))  