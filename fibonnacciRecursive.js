function fibonacciRecursive(number) {
    if(number < 2) return number;

    return fibonacciRecursive(number - 1)  + fibonacciRecursive(number -1);

}

console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(7));
