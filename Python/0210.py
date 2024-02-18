class Solution:
    def plusOne(self, digits):
        return [int(digit) for digit in str(int(''.join(map(str, digits))) + 1)]

# Example usage:
solution = Solution()
print(solution.plusOne([1, 2, 3]))   # [1, 2, 4]
print(solution.plusOne([4, 3, 2, 1])) # [4, 3, 2, 2]
print(solution.plusOne([9]))          # [1, 0]