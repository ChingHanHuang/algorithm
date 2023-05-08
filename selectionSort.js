const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minPos = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minPos]) minPos = j;
    }

    if (minPos !== i) {
      [array[i], array[minPos]] = [array[minPos], array[i]];
    }
  }
  return array;
};

console.log(selectionSort([5, 3, 7, 1, 4, 2]));

// Time complexity: worse = O(n^2), best = O(n^2)
// Space complexity: O(1)
