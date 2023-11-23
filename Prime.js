function prime(number){
    if(number < 2) return false;

    for(let i=2; i< number; i++){
        if(number%i === 0) return false
    }

    return true;
}

console.log(prime(0));
console.log(prime(5))
console.log(prime(4))