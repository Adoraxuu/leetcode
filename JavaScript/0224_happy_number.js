function isHappy(n) {
    while (n !== 1 && n !== 4) {
        n = String(n).split('').map(Number).reduce((sum, digit) => sum + digit ** 2, 0);
    }
    return n === 1;
}

// 測試
console.log(isHappy(19));   // Output: true
console.log(isHappy(2));    // Output: false
console.log(isHappy(8397)); // Output: true