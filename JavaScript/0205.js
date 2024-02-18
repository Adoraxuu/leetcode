function removeDuplicates(nums) {
    nums.splice(0, nums.length, ...new Set(nums));
    return nums.length;
}
  
  // 測試案例
  let testInput = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let result = removeDuplicates(testInput);
  console.log(result);
  console.log(testInput);