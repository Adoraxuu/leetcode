/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
  };
  
  // Example usage:
  console.log(singleNumber([2, 2, 1]));     // 1
  console.log(singleNumber([4, 1, 2, 1, 2])); // 4
  console.log(singleNumber([1]));            // 1