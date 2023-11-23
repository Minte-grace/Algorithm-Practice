const factorial = (number) => {
    let result = 1;
    for(let i = number; i > 0; i--){
        result = result * i;
    }
    return result;
}

console.log(factorial(3));
console.log(factorial(8));
console.log(factorial(7));