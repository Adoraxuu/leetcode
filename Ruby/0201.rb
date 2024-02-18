def is_palindrome(x)
  x.to_s == x.to_s.reverse
end

puts is_palindrome(121)    # true
puts is_palindrome(-121)   # false
puts is_palindrome(10)     # false
