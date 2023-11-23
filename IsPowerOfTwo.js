function isPowerOfTwo(number){
    for(let i = 0; i< number; i++){
        if(number === Math.pow(2, i)) return true;
    }
    return false;
}

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));