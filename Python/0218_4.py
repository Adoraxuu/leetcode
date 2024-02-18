def high_and_low(numbers):
    numbers = list(map(int, numbers.split()))
    return f"{max(numbers)} {min(numbers)}"

# 範例
print(high_and_low("1 2 3 4 5"))   # 輸出: "5 1"
print(high_and_low("1 2 -3 4 5"))  # 輸出: "5 -3"
print(high_and_low("1 9 3 4 -5"))  # 輸出: "9 -5"