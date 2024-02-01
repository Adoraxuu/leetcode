var isPalindrome = function(x) {
    return x == [...x.toString()].reverse().join('');
};

// 測試
console.log(isPalindrome(121));    // true
console.log(isPalindrome(-121));   // false
console.log(isPalindrome(10));     // false