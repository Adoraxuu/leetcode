def is_valid(s)
  stack = []
  mapping = { ')' => '(', '}' => '{', ']' => '[' }

  s.each_char do |char|
    if mapping.key?(char)
      top_element = stack.pop || '#'
      return false if mapping[char] != top_element
    else
      stack.push(char)
    end
  end

  stack.empty?
end

# 範例測試
puts is_valid("()")        # true
puts is_valid("()[]{}")    # true
puts is_valid("(]")        # false
