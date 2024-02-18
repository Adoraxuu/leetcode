from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        nums[:] = sorted(set(nums))
        return len(nums)


# 測試案例
solution = Solution()
test_input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
result = solution.removeDuplicates(test_input)
print(result)
print(test_input)