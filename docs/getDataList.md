# getDataList 取得整個步驟陣列

## 定義和用法

getDataList 用於取得整個步驟陣列

## 語法

```javascript
mochiUndoRedo.getDataList();
```

## 範例

```javascript
mochiUndoRedo.add(1);
mochiUndoRedo.add(2,{name: "add 2"});
mochiUndoRedo.add(3);

console.log(mochiUndoRedo.getDataList());
// [{
//    value: 1,
//    customData: {}
// },{
//    value: 2,
//    customData: {name: "add 2"}
// },{
//    value: 3,
//    customData: {}
// }]
```
