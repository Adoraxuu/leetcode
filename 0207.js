var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};

// 測試案例 1
const s1 = "Hello World";
const output1 = lengthOfLastWord(s1);
console.log(`Input: ${s1}, Output: ${output1}`);

// 測試案例 2
const s2 = "   fly me   to   the moon  ";
const output2 = lengthOfLastWord(s2);
console.log(`Input: ${s2}, Output: ${output2}`);

// 測試案例 3
const s3 = "luffy is still joyboy";
const output3 = lengthOfLastWord(s3);
console.log(`Input: ${s3}, Output: ${output3}`);