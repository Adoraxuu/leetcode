def merge(nums1, m, nums2, n)
  nums1.replace((nums1[0...m] + nums2).sort)
end

# 測試
nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3

merge(nums1, m, nums2, n)
result_array = nums1.take(m + n)
puts result_array
