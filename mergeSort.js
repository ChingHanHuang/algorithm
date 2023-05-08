const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let mid = array.length / 2;
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sortedArr.push(left.shift());
    else sortedArr.push(right.shift());
  }
  return [...sortedArr, ...left, ...right];
};

console.log(mergeSort([8, 4, 3, 7, 6, 1, 9]));

// Time complexity: worst = O(nlog(n)), best = (nlog(n))
// Space complexity: O(n)
