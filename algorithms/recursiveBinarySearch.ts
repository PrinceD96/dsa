// assumes array is sorted
const recursiveFindTargetIndexBinary = (array: number[], target: number): number => {
  return search(array, target, 0, array.length - 1);
} 

const search = (array: number[], target: number, leftIdx: number, rightIdx: number): number => {
  if (leftIdx > rightIdx) return -1;

  const middleIdx = Math.floor((leftIdx + rightIdx) / 2); 
  const currentNumber = array[middleIdx];
  if (array[middleIdx] === target) return middleIdx;
  if (target < currentNumber) {
    return search(array, target, leftIdx, middleIdx - 1)
  } else {
    return search(array, target, middleIdx + 1, rightIdx)
  }

}

const sortedNums = [-5, 2, 4, 6, 10];

const recursiveFindTargetIndexBinaryTen = recursiveFindTargetIndexBinary(sortedNums, 10);
const recursiveFindTargetIndexBinarySix = recursiveFindTargetIndexBinary(sortedNums, 6);
const recursiveFindTargetIndexBinaryTwenty = recursiveFindTargetIndexBinary(sortedNums, 20);

recursiveFindTargetIndexBinaryTen
recursiveFindTargetIndexBinarySix
recursiveFindTargetIndexBinaryTwenty

// O(log (n))