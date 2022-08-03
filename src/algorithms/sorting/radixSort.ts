const radixSort = (numbers: number[]): number[] => {
  const mostDigits = getMostDigits(numbers);

  for(let k = 0; k < mostDigits; k++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      const digit = getDigit(number, k);
      buckets[digit].push(number);
    }
    numbers = [].concat(...buckets as any);
  }
  return numbers;
}

// Helpers
const getDigit = (num: number, idx: number): number => {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
};

const getDigitCount = (num: number): number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getMostDigits = (numbers: number[]): number => {
  let maxDigits = 0;
  for (let i = 0; i < numbers.length; i++) {
      maxDigits = Math.max(maxDigits, getDigitCount(numbers[i]));    
  }
  return maxDigits;
};

const unsortedRadix = [235, 38, 1, 3562, 3895, 345, 67, 899, 09]
const sortedRadix = radixSort(unsortedRadix)
sortedRadix

// O(nk) if k is log(n) then O(n log(n))