function mySqrt(x) {
    let left = 0;
    let right = x;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midSquared = mid * mid;
  
      if (midSquared === x) {
        return mid;
      } else if (midSquared < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  }
  
  console.log(mySqrt(4));  // 輸出: 2
  console.log(mySqrt(8));  // 輸出: 2