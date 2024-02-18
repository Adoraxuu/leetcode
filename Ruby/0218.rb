def digital_root(n)
  n < 10 ? n : digital_root(n.digits.sum)
end

def digital_root2(n)
  n.zero? ? 0 : (n - 1) % 9 + 1
end

puts digital_root(16)
puts digital_root(942)
puts digital_root(132189)
puts digital_root(493193)
