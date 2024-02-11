def search_insert(nums, target)
  left, right = 0, nums.length - 1

  while left <= right
    mid = (left + right) / 2
    if nums[mid] == target
      return mid
    elsif nums[mid] < target
      left = mid + 1
    else
      right = mid - 1
    end
  end

  return left
end

# Example usage:
puts search_insert([1, 3, 5, 6], 5)  # 2
puts search_insert([1, 3, 5, 6], 2)  # 1
puts search_insert([1, 3, 5, 6], 7)  # 4
