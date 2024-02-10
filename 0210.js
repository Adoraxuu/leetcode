/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return (BigInt(digits.join('')) + 1n).toString().split('').map(Number);
  };
  
  // Example usage:
  console.log(plusOne([1, 2, 3]));   // [1, 2, 4]
  console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
  console.log(plusOne([9]));          // [1, 0]