function isPowerOfFour(n) {
    if (n === 1) {
        return true
    }
    if (n < 1 || (n % 4) !== 0) {
        return false
    }
    return isPowerOfFour(n / 4)
    }