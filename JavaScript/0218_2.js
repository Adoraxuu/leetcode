function sequenceSum(begin, end, step) {
    if (begin > end) {
      return 0;
    }
  
    const count = Math.floor((end - begin) / step) + 1;
    return (begin + end) * count / 2;
  }

// 範例
console.log(sequenceSum(12, 2, 2));   // 輸出: 0
console.log(sequenceSum(2, 6, 2));   // 輸出: 12
console.log(sequenceSum(1, 5, 1));   // 輸出: 15
console.log(sequenceSum(1, 5, 3));   // 輸出: 5