# clearAll 清空所有紀錄

## 定義和用法

clearAll 用於清空所有歷史記錄

## 語法

```javascript
mochiUndoRedo.clearAll();
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

mochiUndoRedo.clearAll();

console.log(mochiUndoRedo.getDataList());
// [{
//    value: null,
//    customData: {}
// }]
```
