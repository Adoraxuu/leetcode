今天解的是`6kyu`的難度，也是面試遇到的題目😊，做這個題目前想到`生命靈數`也是這樣取的，把自己的西元出生年月日依序加起來，得到的個位數就是自己的`生命靈數`。

可以使用`兩種`方法來解，一種是`遞迴`，一種經由`公式推導`計算式，解法如下：

## Ruby
```ruby
#解法一
def digital_root(n)
  n < 10 ? n : digital_root(n.digits.sum)
end
```
`遞迴(recursion)`簡單來說就是函式會一直重複呼叫本身直到達成條件，
假如定義一個輸入值為`digital_root(666)`
第一次的結果為`6 + 6 + 6 = 18`，但值還沒有達到條件的`n < 10`，
所以會再重複呼叫一次，此時`n = 18`，`1 + 8 = 9`，
已經達到`n < 10`的條件，因此會回傳`9`


```ruby
#解法二
def digital_root(n)
  n.zero? ? 0 : (n - 1) % 9 + 1
end
```
解法二就是之前常說的：如果在看到題目前多想一點，可以讓程式效率更高。
因為此字根是使用`10進位制`，每個字根都是`過9進位`，`數字和 > 9`時就要再重複相加，因此這裡的`% 9`就是簡化重複相加的步驟，以下舉例：
```
10 % 9 = 1
100 % 9 = 1
1000 % 9 = 1
```
這樣看來應該`% 9`就可以得到答案，為什麼答案會是`n.zero? ? 0 : (n - 1) % 9 + 1`呢？

第一個是因為如果輸入值剛好是0的話，應該直接返回`0`，因此在前面加了判斷式。

第二個是因為`% 9`遇到`9的倍數`就會出錯，為了避免這個情況，會需要先將`n-1`，`%9`後再`+1`，這樣遇到9的倍數答案也能正確～

後面`Python`的解法和`JS`解法大致相同，只有寫法不同而已：

## Python
```py
def digital_root(n):
    return n if n < 10 else digital_root(sum(int(digit) for digit in str(n)))
```
```py
def digital_root(n):
    return n if n == 0 else (n - 1) % 9 + 1
```

## JavaScript
```js
function digitalRoot(n) {
    return n < 10 ? n : digitalRoot([...n.toString()].reduce((sum, digit) => sum + parseInt(digit), 0));
  }
```
```js
function digitalRoot2(n) {
    return n === 0 ? 0 : (n - 1) % 9 + 1;
}
```