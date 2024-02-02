def roman_to_int(s)
  roman_numerals = {'I'=>1, 'V'=>5, 'X'=>10, 'L'=>50, 'C'=>100, 'D'=>500, 'M'=>1000}
  result = 0
  prev_value = 0

  s.chars.reverse_each do |char|
    value = roman_numerals[char]
    result += (value < prev_value) ? -value : value
    prev_value = value
  end

  result
end

puts roman_to_int("XL")    # Output: 40
puts roman_to_int("LVIII")  # Output: 58
puts roman_to_int("MCMLXXXVIV")# Output: 1994
