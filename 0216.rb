def maskify(cc)
  cc.size > 4 ? "#" * (cc.size - 4) + cc[-4..-1] : cc
end

puts maskify("4556364607935616")
puts maskify("64607935616")
puts maskify("1")
