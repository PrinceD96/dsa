const recursiveFactorial = (num: number): number => {
  if (num === 0) return 1;

  return num * recursiveFactorial(num - 1) ;
}

const recursiveFactorialOfOne = recursiveFactorial(1);
const recursiveFactorialOfTwo = recursiveFactorial(2);
const recursiveFactorialOfThree = recursiveFactorial(3);
const recursiveFactorialOfFour = recursiveFactorial(4);
const recursiveFactorialOfFive = recursiveFactorial(5);