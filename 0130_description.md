## ruby

使用`replace`取代，位置為nums1[0..m]，再使用+符號將兩個陣列排列在一起，最後使用sort完成遞增排序。

Ruby蠻簡潔的！

## javascript
- nums1.splice(0, m + n, ...)將合併且排序的數組插入到nums1的開始位置，取代原有的元素，其中0是開始位置，m + n是要刪除的元素數量，...是展開運算符，用於將排序後的數組展開成單獨的元素。

- 這個函數的目的是將兩個已排序的數組 nums1 和 nums2 合併，並將結果存儲在 nums1 中，同時保持排序狀態。

`slice`
- `arr.slice([begin[, end]])`
- slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。

`splice`
- array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
- splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
- 範例：
```
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
```

