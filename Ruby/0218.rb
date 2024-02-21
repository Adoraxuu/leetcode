def digital_root(n)
  n < 10 ? n : digital_root(n.digits.sum)
end

def digital_root2(n)
  n.zero? ? 0 : (n - 1) % 9 + 1
end

def digital_root3(n)
  case
  when n.zero?
    0
  when n % 9 == 0
    9
  else
    n % 9
  end
end

puts digital_root3(16)
puts digital_root2(942)
puts digital_root(132189)
puts digital_root(493193)
