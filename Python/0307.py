## 練習

false_values = [
    False,
    [],
    {},
    '',
    0,
    0.0,
    None
]

for value in false_values:
    print('{} is {}'.format(value, bool(value)))


class MyType:
    def __init__(self):
        self.value = []
    def add(self, x):
        self.value.append(x)
    def __bool__(self):
        return bool(self.value)
    
my_type = MyType()
print(bool(my_type))
my_type.add(1)
print(bool(my_type))
