function isPalindrome(s) {
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanS === cleanS.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
  console.log(isPalindrome("race a car"));                      // false
  console.log(isPalindrome(" "));                                // true