class Solution:
    def mySqrt(self, x: int) -> int:
        left, right = 0, x

        while left <= right:
            mid = (left + right) // 2
            mid_squared = mid * mid

            if mid_squared == x:
                return mid
            elif mid_squared < x:
                left = mid + 1
            else:
                right = mid - 1

        return right

# 使用範例
solution = Solution()
print(solution.mySqrt(4))  # 輸出: 2
print(solution.mySqrt(8))  # 輸出: 2