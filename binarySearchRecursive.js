function binarySearchRecursive(arr, target, start, end){
    let mid  = Math.floor((start + end)/ 2);

    if(start > end) return -1;

    if(arr[mid] == target) return mid;

}


console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10));
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 6));
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 20));