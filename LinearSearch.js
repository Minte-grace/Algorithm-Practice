function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 3, 5, 6, 7, 8], 0));
console.log(linearSearch([4, 6, 2, 1, 3], 3));
