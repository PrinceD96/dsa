const recursiveFibonacci = (num: number): number => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return recursiveFibonacci(num - 2) + recursiveFibonacci(num - 1);
}

const recursiveFibonacciOfZero = recursiveFibonacci(0);
const recursiveFibonacciOfOne = recursiveFibonacci(1);
const recursiveFibonacciOfTwo = recursiveFibonacci(2);
const recursiveFibonacciOfEight = recursiveFibonacci(6);

recursiveFibonacciOfZero
recursiveFibonacciOfOne
recursiveFibonacciOfTwo
recursiveFibonacciOfEight

// O(2^n)