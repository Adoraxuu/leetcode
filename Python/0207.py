class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.strip().split(' ')[-1])
    
solution = Solution()
# 測試案例 1
s1 = "Hello World"
output1 = solution.lengthOfLastWord(s1)
print(f"Input: {s1}, Output: {output1}")

# 測試案例 2
s2 = "   fly me   to   the moon  "
output2 = solution.lengthOfLastWord(s2)
print(f"Input: {s2}, Output: {output2}")

# 測試案例 3
s3 = "luffy is still joyboy"
output3 = solution.lengthOfLastWord(s3)
print(f"Input: {s3}, Output: {output3}")