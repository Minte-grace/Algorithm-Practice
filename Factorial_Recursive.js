const recursiveFactorial = (number) => {
    if(number === 0) return 1;

    
    return number * recursiveFactorial(number - 1)
}

console.log(recursiveFactorial(3))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(8))