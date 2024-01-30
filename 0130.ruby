def two_sum(nums, target)
  num_indices = {}

  nums.each_with_index do |num, index|
    complement = target - num
    return [num_indices[complement], index] if num_indices[complement]

    num_indices[num] = index
  end
end

# Example usage:
puts two_sum([2, 7, 11, 15], 9)  # Output: [0, 1]
puts two_sum([3, 2, 4], 6)       # Output: [1, 2]
puts two_sum([3, 3], 6)           # Output: [0, 1]
