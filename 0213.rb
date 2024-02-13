def convert_to_title(column_number)
  result = ''
  while column_number > 0
    column_number -= 1
    result = ('A'.ord - 1 + column_number % 26).chr + result
    column_number /= 26
  end
  result
end

# 範例
puts convert_to_title(1)    # Output: "A"
puts convert_to_title(28)   # Output: "AB"
puts convert_to_title(701)  # Output: "ZY"
