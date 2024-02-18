function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    let commonPrefix = "";
    const firstStr = strs[0];

    for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr[i];
        if (!strs.every(str => str[i] === char)) {
            break;
        }
        commonPrefix += char;
    }

    return commonPrefix;
}

// 測試
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // 輸出: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));      // 輸出: ""