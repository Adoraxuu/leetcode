class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_s = ''.join(char.lower() for char in s if char.isalnum())
        return clean_s == clean_s[::-1]

# 例子：
solution = Solution()
print(solution.isPalindrome("A man, a plan, a canal: Panama"))  # True
print(solution.isPalindrome("race a car"))                      # False
print(solution.isPalindrome(" "))                                # True