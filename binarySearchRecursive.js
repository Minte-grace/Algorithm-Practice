function binarySearchHelper(arr, target, start, end){
    if(start > end) return -1;

    let mid  = Math.floor((start + end) / 2);

    if(arr[mid] == target) return mid;

    if(arr[mid] < target){
        return binarySearchHelper(arr, target, mid + 1, end);
    } else {
        return binarySearchHelper(arr , target, start, mid - 1)
    }
}


function binarySearchRecursive(arr, target) {
    return binarySearchHelper(arr, target, 0, arr.length - 1);
}

console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10));
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 6));
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 20));