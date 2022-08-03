const fibonacci = (num: number): number => {
  const sequence = [0, 1]

  for (let i = 2; i < num + 1; i++) {
      sequence.push(sequence[i - 2] + sequence[i - 1])
  }

  return sequence[num]

}

// [0,1,1,2,3,5,8,13]

const fibonacciOfZero = fibonacci(0);
const fibonacciOfOne = fibonacci(1);
const fibonacciOfTwo = fibonacci(2);
const fibonacciOfEight = fibonacci(6);

fibonacciOfZero
fibonacciOfOne
fibonacciOfTwo
fibonacciOfEight

// O(n)