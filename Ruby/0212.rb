def my_sqrt(x)
  left, right = 0, x

  while left <= right
    mid = (left + right) / 2
    mid_squared = mid * mid

    if mid_squared == x
      return mid.to_i
    elsif mid_squared < x
      left = mid + 1
    else
      right = mid - 1
    end
  end

  right.to_i
end

puts my_sqrt(4)  # 輸出: 2
puts my_sqrt(8)  # 輸出: 2
