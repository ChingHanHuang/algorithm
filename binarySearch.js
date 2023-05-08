const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) start = mid + 1;
    else return mid;
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));

// Time complexity: worst = O(log(n)), best = O(1)
// Space complexity: O(1)
