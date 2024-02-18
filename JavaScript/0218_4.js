function highAndLow(numbers) {
    const nums = numbers.split(' ').map(Number);
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

  // 範例
  console.log(highAndLow("1 2 3 4 5"));    // 輸出: "5 1"
  console.log(highAndLow("1 2 -3 4 5"));   // 輸出: "5 -3"
  console.log(highAndLow("1 9 3 4 -5"));   // 輸出: "9 -5"