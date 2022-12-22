<script setup>
import ParamsTable from '/components/paramsTable.vue'

const data = [{
   params: "count",
   type: "number",
   required: "N",
   default: "1",
   content: "指定倒退的步驟數量"
}];

</script>

# undo 上一步

## 定義和用法

undo 用於將目前步驟的資料更新為上一步驟的資料

## 語法

```javascript
mochiUndoRedo.undo(count);
```

<ParamsTable :data="data"/>

## 範例

```javascript
mochiUndoRedo.add(1);
mochiUndoRedo.add(2,{name: "add 2"});
mochiUndoRedo.add(3);
mochiUndoRedo.add(4);
mochiUndoRedo.add(5);

//undo
mochiUndoRedo.undo(2);

console.log(mochiUndoRedo.getData());
// {
//    value: 3,
//    customData: {}
// }
```
