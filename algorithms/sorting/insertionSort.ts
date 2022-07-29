const insertionSort = (numbers: number[]): number[] => {
  for (let i = 1; i < numbers.length; i++) {
    let numberToInsert = numbers[i];
    let sortedIdx = i - 1;
    while (sortedIdx >= 0 && numbers[sortedIdx] > numberToInsert) {
      numbers[sortedIdx + 1] = numbers[sortedIdx];
      sortedIdx = sortedIdx - 1
    }
    numbers[sortedIdx + 1] = numberToInsert;
  }
  return numbers;
}

const unsorted = [8, 20, -2, 4, -6];
const sorted = insertionSort(unsorted);
sorted

export {}