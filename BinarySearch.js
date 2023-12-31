function binarySearch(arr, target){
   
    let start = 0;
    let end = arr.length -1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid] < target){
            start = mid + 1;
        }

        else {
            end = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));