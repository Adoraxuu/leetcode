from functools import reduce

class Solution:
    def singleNumber(self, nums):
        return reduce(lambda x, y: x ^ y, nums)

# Example usage:
solution = Solution()
print(solution.singleNumber([2, 2, 1]))       # 1
print(solution.singleNumber([4, 1, 2, 1, 2])) # 4
print(solution.singleNumber([1]))             # 1