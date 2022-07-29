// An integer is a power of 2 if there exists an integer 'x' such that n === 2^x

const isPowerOfTwo = (num: number): boolean => {
  for (let i = 0; i < num; i++) {
    if (Math.pow(2, i) === num) return true
  }

  return false;
}

const isOnePowerOfTwo = isPowerOfTwo(1)
const isTwoPowerOfTwo = isPowerOfTwo(2)
const isFivePowerOfTwo = isPowerOfTwo(5)
const isEightPowerOfTwo = isPowerOfTwo(8)

isOnePowerOfTwo
isTwoPowerOfTwo
isFivePowerOfTwo
isEightPowerOfTwo