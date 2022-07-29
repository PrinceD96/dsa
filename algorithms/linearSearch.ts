const findTargetIndex = (array: number[], target: number): number => {
  for (let index = 0; index < array.length; index++) {
    const currentNumber = array[index];
    if (currentNumber === target) return index;
    
  }
  return -1;
}

const numbers = [1,3,2,4,5,35,39,52,22]
const findTargetIndexOne = findTargetIndex(numbers, 2)
const findTargetIndexFive = findTargetIndex(numbers, 5)
const findTargetIndexTen = findTargetIndex(numbers, 10)

findTargetIndexOne
findTargetIndexFive
findTargetIndexTen

// O(n)