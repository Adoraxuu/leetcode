def two_sum(nums, target)
  seen = {}
  nums.each_with_index{|num,i| return [seen[target-num],i] if seen.key?(target-num);seen[num]= i}
end

# Testing
puts two_sum([2, 7, 11, 15], 9)  # Output: [0, 1]
puts two_sum([3, 2, 4], 6)       # Output: [1, 2]
puts two_sum([3, 3], 6)          # Output: [0, 1]
