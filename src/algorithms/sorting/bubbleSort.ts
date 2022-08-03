const bubbleSort = (array: number[]): number[] => {
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      const leftNumber = array[i];
      const rightNumber = array[i+1];
  
      if (leftNumber <= rightNumber) {
      } else {
        [array[i], array[i+1]] = [array[i+1], array[i]];
        swapped = true;
      }
    }
  } while (swapped)

  return array
}

const unsorted = [8, 20, -2, 4, -6];

const sorted =  bubbleSort(unsorted);

sorted

// O(n^2)