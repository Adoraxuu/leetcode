這次的題目就是將輸入的內容拆開為陣列，各別平方後，再加入組合起來就能得到答案了٩(^ᴗ^)۶

## Ruby
```ruby
def square_digits(num)
  num.to_s.chars.map { |digit| digit.to_i ** 2}.join.to_i
end
```
聽到`各別`兩個字，腦中一定會自動聯想到`map`，這題也是使用`map`個字平方後再使用`join`組合成字串後，再使用`to_i`返還數字

## Python
```py
def square_digits(num):
    return int(''.join(str(int(digit)**2) for digit in str(num)))
```
`python`則是寫法稍微不同，可以使用`for digit in str(num)`即可

## JavaScript
```js
function squareDigits(num) {
    return parseInt(num.toString().split('').map(digit => parseInt(digit)**2).join(''), 10);
  }
```
