function isPowerOfTwoBitwise(number) {
    if (number < 1) return false;
  
    return (number & (number - 1)) === 0;
  }
  
  console.log(isPowerOfTwoBitwise(0));
  console.log(isPowerOfTwoBitwise(1));
  console.log(isPowerOfTwoBitwise(2));
  console.log(isPowerOfTwoBitwise(5));
  console.log(isPowerOfTwoBitwise(4));