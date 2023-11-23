const fibonacci  = (number) => {
   if(number <= 1) return [0];

   let fib = [0, 1];

   for(let i = 2; i < number; i++) {
        fib[i] = fib[i-1] + fib[i-2];
   }

   return fib;

}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));