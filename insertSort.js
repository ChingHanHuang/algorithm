const insertSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currVal = array[i];
    let j;
    for (j = i - 1; j >= 0, currVal < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currVal;
  }
  return array;
};

console.log(insertSort([5, 6, 3, 4, 1, 2]));
