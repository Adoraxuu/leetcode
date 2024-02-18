def longest_common_prefix(strs)
  return "" if strs.empty?

  common_prefix = ""
  first_str = strs.first

  first_str.chars.each_with_index do |char, i|
    break unless strs.all? { |str| str[i] == char }
    common_prefix += char
  end

  common_prefix
end

# 測試案例
puts longest_common_prefix(["flower", "flow", "flight"])  # 輸出: "fl"
puts longest_common_prefix(["dog", "racecar", "car"])      # 輸出: ""
