// assumes array is sorted
const findTargetIndexBinary = (array: number[], target: number): number => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
 

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex)/2);
    const currentNum = array[middleIndex];
    if (currentNum === target) return middleIndex;

    if (target < currentNum) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  
  return -1;
} 

const sortedNumbers = [-5, 2, 4, 6, 10];

const findTargetIndexBinaryTen = findTargetIndexBinary(sortedNumbers, 10);
const findTargetIndexBinarySix = findTargetIndexBinary(sortedNumbers, 6);
const findTargetIndexBinaryTwenty = findTargetIndexBinary(sortedNumbers, 20);

findTargetIndexBinaryTen
findTargetIndexBinarySix
findTargetIndexBinaryTwenty

// O(log (n))