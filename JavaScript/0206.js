function majorityElement(nums) {
    let count = 0;
    let majority;

    for (const num of nums) {

        if (count === 0) {
            majority = num;
        }

        count += (num === majority) ? 1 : -1;
    }

    return majority;
}

// 範例測試
const nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2