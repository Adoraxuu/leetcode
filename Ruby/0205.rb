def remove_duplicates(nums)
  nums.uniq!
  nums.size
end

puts remove_duplicates([0,0,1,1,1,2,2,3,3,4])
