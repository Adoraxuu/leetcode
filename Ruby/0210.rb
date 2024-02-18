def plus_one(digits)
  (digits.join('').to_i + 1).to_s.chars.map(&:to_i)
end

# Example usage:
puts plus_one([1, 2, 3])   # [1, 2, 4]
puts plus_one([4, 3, 2, 1]) # [4, 3, 2, 2]
puts plus_one([9])          # [1, 0]
