## Ruby
```ruby
def is_valid(s)
  stack = []
  mapping = { ')' => '(', '}' => '{', ']' => '[' }

  s.each_char do |char|
    if mapping.key?(char)
      top_element = stack.pop || '#'
      return false if mapping[char] != top_element
    else
      stack.push(char)
    end
  end

  stack.empty?
end
```

先設定一個名為`stack`的空陣列，還有左括號的hash，
因為key為右括號，所以第一次的左括號都無懸念地進入`stack`，第二次迴圈，`top_element`則取出上一次放進去的左括號，並去比對是否和第二次迴圈對應到的左括號相符。

如果不符合即會回傳`false`，如果所有的括號都成對，即`stack`為空

## Python
```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}

        for char in s:
            if char in mapping:
                top_element = stack.pop() if stack else '#'
                if mapping[char] != top_element:
                    return False
            else:
                stack.append(char)

        return not stack
```
`python`使用一樣的方式，不過因為`python`的添加`list`使用的是`append`，所以這裡我改用`stack.append(char)` 

## JavaScript
```js
var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (mapping[char]) {
            const topElement = stack.pop() || '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return !stack.length;
};
```
JS也是依樣畫葫蘆！只要稍微改寫一下寫法即可


###
參考資料：
[Python手冊](https://docs.python.org/zh-tw/3/tutorial/datastructures.html)
