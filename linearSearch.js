const linearSearch = (arr, target) => {
  for (let i in arr) if (arr[i] === target) return i;
  return -1;
};

console.log(linearSearch([4, 6, 7, 8, 9, 22, 45, 68], 22));

// Time complexity: worst = O(n), best = O(1)
// Space complexity: O(1)
