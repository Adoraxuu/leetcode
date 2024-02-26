class Solution:
    def isHappy(self, n: int) -> bool:
        while n != 1 and n != 4:
            n = sum(int(digit) ** 2 for digit in str(n))
        return n == 1

# 測試
solution = Solution()
print(solution.isHappy(19))   # Output: True
print(solution.isHappy(2))    # Output: False
print(solution.isHappy(8397)) # Output: True