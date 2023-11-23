const recursiveFactorial = (number) => {
    if(number <= 0) return null;

    let result = 1;

    if(number === 1){
        return result * number;
    }
    
    recursiveFactorial(number - 1)
}

console.log(recursiveFactorial(3))
console.log(recursiveFactorial(7))
console.log(recursiveFactorial(8))