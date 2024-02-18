class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = ''
        while columnNumber:
            columnNumber -= 1
            result = chr(ord('A') + columnNumber % 26) + result
            columnNumber //= 26
        return result

# 簡單範例
sol = Solution()
print(sol.convertToTitle(1))    # Output: "A"
print(sol.convertToTitle(28))   # Output: "AB"
print(sol.convertToTitle(701))  # Output: "ZY"