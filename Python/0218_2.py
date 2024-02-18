def sequence_sum(begin_number, end_number, step):
    return sum(range(begin_number, end_number + 1, step))

# 範例
print(sequence_sum(12, 2, 2))   # 輸出: 0
print(sequence_sum(2, 6, 2))   # 輸出: 12
print(sequence_sum(1, 5, 1))   # 輸出: 15
print(sequence_sum(1, 5, 3))   # 輸出: 5