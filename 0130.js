var merge = function(nums1, m, nums2, n) {
  nums1.splice(0, m + n, ...nums1.slice(0, m).concat(nums2).sort((a, b) => a - b));
};


var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); 