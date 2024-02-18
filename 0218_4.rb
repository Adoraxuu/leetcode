def high_and_low(numbers)
  numbers.split.map(&:to_i).minmax.reverse.join(' ')
end

# 範例
puts high_and_low("1 2 3 4 5")  # 輸出: "5 1"
puts high_and_low("1 2 -3 4 5") # 輸出: "5 -3"
puts high_and_low("1 9 3 4 -5") # 輸出: "9 -5"
