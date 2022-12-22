# count 取得歷史記錄數量

## 定義和用法

count 用於取得歷史記錄數量

## 語法

```javascript
mochiUndoRedo.count;
```

## 範例

```javascript
mochiUndoRedo.add(1);
mochiUndoRedo.add(2,{name: "add 2"});
mochiUndoRedo.add(3);

console.log(mochiUndoRedo.count);
// 3
```
