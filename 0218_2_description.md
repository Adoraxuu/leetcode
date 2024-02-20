[Sum of a sequence](https://www.codewars.com/kata/586f6741c66d18c22800010a)
這個題目也蠻有趣的，會給三個值`(begin,end,step)`，如果`begin > end`則回傳`0`，沒有的話就以`step`為差，由`begin`加總至`end`，只要讀懂了題目依序寫成程式碼答案就出來了୧☉□☉୨

## Ruby
```ruby
def sequence_sum(begin_number, end_number, step)
  (begin_number..end_number).step(step).sum
end
```
Ruby的`step`有一個有趣的地方，只要範圍不對的話，就會回傳0，
所以如果`begin_number`>`end_number`，即會回傳0，而不需要多加判斷

## Python
```py
def sequence_sum(begin_number, end_number, step):
    return sum(range(begin_number, end_number + 1, step))
```
和`ruby`不一樣的地方是，`python`的`Range`如果是`range(1,4)`，出現的結果會是`[1,2,3]`並不會包含最後一位數，所以這裡需要`+1`

而Python和Ruby一樣，如果加總的範圍不對的話會回傳`0`，像是我輸入`begin_number`為12，`end_number`為2、`step`為2，明顯範圍不對即會回傳`0`，因此不需要額外填寫判斷式

## JavaScript
```js
function sequenceSum(begin, end, step) {
    if (begin > end) {
      return 0;
    } else {
      return Array.from({ length: Math.floor((end - begin) / step) + 1 }, (_, i) => begin + i * step).reduce((sum, num) => sum + num, 0);
    }
  }
```
JS就沒那麼多好用的方法，但因為加總的公式也不複雜，這裡就使用判斷式+加總的公式解，效率也比較高～