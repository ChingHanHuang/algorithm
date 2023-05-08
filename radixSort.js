const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
};

const mostDigit = (array) => {
  let maxDigits = 0;
  for (num of array) maxDigits = Math.max(maxDigits, digitCount(num));

  return maxDigits;
};

const radixSort = (array) => {
  let maxDigits = mostDigit(array);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (num of array) {
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    array = [].concat(...digitBuckets);
  }
  return array;
};

console.log(radixSort([5, 4, 88, 231, 47, 5648, 21]));

// Time complexity: worst = O(k * n), best = O(k * n)
// Space complexity: O(n + d)
