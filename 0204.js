/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (mapping[char]) {
            const topElement = stack.pop() || '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return !stack.length;
};

console.log(isValid("()"));           // 預期輸出: true
console.log(isValid("()[]{}"));       // 預期輸出: true
console.log(isValid("(]"));           // 預期輸出: false
console.log(isValid("([)]"));         // 預期輸出: false
console.log(isValid("{[]}"));         // 預期輸出: true