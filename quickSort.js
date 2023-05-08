const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return;

  let pivotIdx = partition(arr, start, end);

  // Left
  quickSort(arr, start, pivotIdx - 1);
  // Right
  quickSort(arr, pivotIdx + 1, end);

  return arr;
};

const partition = (arr, startIdx, endIdx) => {
  let swapIdx = startIdx;
  const pivotVal = arr[startIdx];
  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (pivotVal > arr[i]) {
      swapIdx++;
      if (swapIdx !== i) [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  if (swapIdx !== startIdx)
    [arr[startIdx], arr[swapIdx]] = [arr[swapIdx], arr[startIdx]];
  return swapIdx;
};

console.log(quickSort([7, 1, 5, 4, 6, 3, 8]));

// Time complexity: worst = O(n^2), best = O(nlog(n))
// Space complexity: O(log(n))
