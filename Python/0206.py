from collections import Counter
from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        return Counter(nums).most_common(1)[0]

# 創建 Solution 類的實例
solution_instance = Solution()

# 範例 1
nums_example_1 = [3, 2, 3]
result_1 = solution_instance.majorityElement(nums_example_1)
print(f"Example 1: Input: {nums_example_1}, Output: {result_1}")

# 範例 2
nums_example_2 = [2, 2, 1, 1, 1, 2, 2]
result_2 = solution_instance.majorityElement(nums_example_2)
print(f"Example 2: Input: {nums_example_2}, Output: {result_2}")