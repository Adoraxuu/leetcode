def is_happy(n)
  if n < 128 && (n % 3 == 0 || n % 9 == 0 || (n % 100 >= 25 && n % 100 <= 75))
    return false
  end
  while n != 1 && n != 4
    n = n.to_s.chars.map { |digit| digit.to_i ** 2 }.sum
  end
  n == 1
end

# 測試
puts is_happy(2)
puts is_happy(19)
