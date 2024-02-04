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

這次使用到Ruby的`stack`，Ruby的`stack`有點像是(Event Loop)[https://adora-xu.com/2023/11/08/javascript-event-loop/]內的`Call Stack`，採用 LIFO (Last in First out)，將目標物件加入 Stack 最頂端使用`stack.push`，移除並取回 Stack 最頂端的值使用`stack.pop`，取得但不移除 Stack 最頂端的值使用`stack.top`，判斷Stack是否為空，使用`stack.empty`，像本次需要成對使用的題目就很適合使用～

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
`python`一樣用`stack`，不過因為`python`的添加stack比較常使用`append`這裡我改用`stack.append(char)` 

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
(身為一個 Rubyist 需要懂的資料結構 — Stack)[https://icook.engineering/%E8%BA%AB%E7%82%BA%E4%B8%80%E5%80%8B-rubyist-%E9%9C%80%E8%A6%81%E6%87%82%E7%9A%84%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B-stack-9d11c2fd4746]

(Python手冊)[https://docs.python.org/zh-tw/3/tutorial/datastructures.html]

(【Python】Stack(堆疊) 資料結構實作)[https://lovedrinkcafe.com/python-stack-data-structure/]