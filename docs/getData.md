<script setup>
import ParamsTable from '/components/paramsTable.vue'

const data = [{
   params: "index",
   type: "number",
   required: "N",
   default: "N/A",
   content: "指定的步驟索引(未傳入時，將返回目前步驟的資料)"
}];

</script>

# getData 取得指定步驟的資料

## 定義和用法

getData 用於取得指定步驟的資料

## 語法

```javascript
mochiUndoRedo.getData(index);
```

<ParamsTable :data="data"/>

## 範例

```javascript
mochiUndoRedo.add(1);
mochiUndoRedo.add(2,{name: "add 2"});
mochiUndoRedo.add(3,{name: "add 3"});
mochiUndoRedo.add(4,{name: "add 4"});

console.log(mochiUndoRedo.getData());
// {
//    value: 4,
//    customData: {name: "add 4"}
// }

console.log(mochiUndoRedo.getDataList(1));
// {
//    value: 2,
//    customData: {name: "add 2"}
// }
```
