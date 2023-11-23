const factorial = (number) => {
    let result = 1;
    for(let i = number; i > 0; i--){
        result = result * i;
    }
    return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));