def majority_element(nums)
  nums.tally.max_by {|key, value| value }[0]
end

puts majority_element([3,2,3])
puts majority_element([2,2,1,1,1,2,2])
