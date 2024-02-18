def single_number(nums)
  nums.reduce(:^)
end

# Example usage:
puts single_number([2, 2, 1])     # 1
puts single_number([4, 1, 2, 1, 2]) # 4
puts single_number([1])            # 1
