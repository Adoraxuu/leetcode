def is_palindrome(s)
  clean_s = s.downcase.gsub(/[^a-z0-9]/, '')
  clean_s == clean_s.reverse
end

# Example usage:
puts is_palindrome("A man, a plan, a canal: Panama")  # true
puts is_palindrome("race a car")                      # false
puts is_palindrome(" ")                                # true
