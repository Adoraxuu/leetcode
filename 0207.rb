def length_of_last_word(s)
  s.strip.split(' ').last.length
end

s = "Hello World"
puts length_of_last_word(s)
