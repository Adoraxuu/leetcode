因為題目前後會有空格，所以會需要刪除頭尾的空白後，再依據內容拆分為陣列，取出陣列最後一個的長度即可。

這個題目不會再取用原始給予的`input`值，所以不需要考慮使否會回傳新的值或是更改原值，就變得比較單純一點～

## Ruby
```ruby
def length_of_last_word(s)
  s.strip.split(' ').last.length
end
```
Ruby可以使用[strip](https://rubyapi.org/3.3/o/s?q=strip)去除前後的空格，接著使用`split(' ')`將空格拆分為陣列，取出`last.length`就找出答案了～

## Python
```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.strip().split(' ')[-1])
```
Python也是使用[strip](https://docs.python.org/3/library/stdtypes.html)，接著使用`split(' ')`拆分為陣列，這個和Ruby相同。最後使用`[-1]`取出最後一位數，再使用`len()`包住即可～

## JavaScript
```js
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};
```
JS去除前後的空格使用[trim()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim)，接著一樣使用`split(' ')`拆分為陣列，並使用[pop()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)取出陣列最後一位數，再使用`lenght`取長度即可～