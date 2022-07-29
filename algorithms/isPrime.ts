const isPrime = (num: number): boolean => {
  if (num <= 1) return false; // O(1)

  for (let i = 2; i < num; i++) { // O(n)
    if (num % i === 0) return false
  }

  return true; // O(1)  
}

const isFivePrime = isPrime(5)
const isFourPrime = isPrime(4)
const isOnePrime = isPrime(1)

isFivePrime
isFourPrime
isOnePrime  

// Time Complexity O(n)
// Space O(1)