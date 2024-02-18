function twoSum(nums, target) {
    const numIndices = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
  
      if (numIndices.has(complement)) {
        return [numIndices.get(complement), i];
      }
  
      numIndices.set(num, i);
    }
  }
  
  // Example usage:
  console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
  console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
  console.log(twoSum([3, 3], 6)); 