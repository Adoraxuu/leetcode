## Ruby
```ruby
def two_sum(nums, target)
  seen = {}
  nums.each_with_index { |num, i| return [seen[target - num], i] if seen.key?(target - num); seen[num] = i }
end

# Testing
puts two_sum([2, 7, 11, 15], 9)  # Output: [0, 1]
puts two_sum([3, 2, 4], 6)       # Output: [1, 2]
puts two_sum([3, 3], 6)          # Output: [0, 1]
```
`seen`: 空的hash，來記錄已經遍歷過的數字及其對應的索引
`nums`: 傳入的陣列
`target`:目標之和
`each_with_index`:迭代+索引，會得到`num`& 索引值`i`
`if seen.key?(target - num)`: target - num為第二個數，因為target = a + b，target - a = b，第一個數字為num時，第二個則為target - num
`seen[target - num]`: 目標數字的索引值
`seen[num] = i`: 如果沒有匹配的數對，就將當前數字`num`加入`seen`當中

今天的難度比昨天難好多！！不愧是面試常見的題目，但使用Ruby還是能夠很簡潔地寫出來！