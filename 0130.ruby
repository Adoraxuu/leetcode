def merge(nums1, m, nums2, n)
  nums1.replace((nums1[0...m] + nums2).sort)
end


nums1 = [0], m = 0, nums2 = [1], n = 1

merge(nums1, m, nums2, n)
result_array = nums1.take(m + n)
puts result_array
