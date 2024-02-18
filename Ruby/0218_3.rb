def square_digits(num)
  num.to_s.chars.map { |digit| digit.to_i ** 2}.join.to_i
end

puts square_digits(9119) #811181
puts square_digits(765) #493625
