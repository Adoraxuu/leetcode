from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        common_prefix = ""
        first_str = strs[0]

        for i, char in enumerate(first_str):
            if any(i >= len(s) or s[i] != char for s in strs):
                break
            common_prefix += char

        return common_prefix
    
# Example usage:
sol = Solution()

# Test case 1
strs1 = ["flower", "flow", "flight"]
result1 = sol.longestCommonPrefix(strs1)
print(result1)  # Output should be "fl"