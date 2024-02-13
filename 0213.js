function convertToTitle(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--;
        result = String.fromCharCode('A'.charCodeAt(0) + columnNumber % 26) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
}

// 範例
console.log(convertToTitle(1));   // Output: "A"
console.log(convertToTitle(28));  // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"