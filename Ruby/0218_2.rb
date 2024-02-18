def sequence_sum(begin_number, end_number, step)
  (begin_number..end_number).step(step).sum
end

# 範例
puts sequence_sum(12, 2, 2)   # 輸出: 0
puts sequence_sum(2, 6, 2)   # 輸出: 12
puts sequence_sum(1, 5, 1)   # 輸出: 15
puts sequence_sum(1, 5, 3)   # 輸出: 5
