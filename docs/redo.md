<script setup>
import ParamsTable from '/components/paramsTable.vue'

const data = [{
   params: "count",
   type: "number",
   required: "N",
   default: "1",
   content: "指定快進的步驟數量"
}];

</script>

# redo 下一步

## 定義和用法

redo 用於將目前步驟的資料更新為下一步驟的資料

## 語法

```javascript
mochiUndoRedo.redo(count);
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

mochiUndoRedo.redo();

console.log(mochiUndoRedo.getData());
// {
//    value: 4,
//    customData: {}
// }
```
