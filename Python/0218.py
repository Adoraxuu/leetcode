def digital_root(n):
    return n if n < 10 else digital_root(sum(int(digit) for digit in str(n)))

def digital_root2(n):
    return n if n == 0 else (n - 1) % 9 + 1

print(digital_root(78))
print(digital_root(12))
print(digital_root(3))
print(digital_root2(78))
print(digital_root2(12))
print(digital_root2(3))