<script setup>
import ParamsTable from '/components/paramsTable.vue'

const data = [{
   params: "value",
   type: "any",
   required: "Y",
   default: "",
   content: "規定要紀錄的內容"
},{
   params: "customData",
   type: "object",
   required: "N",
   default: "{}",
   content: "使用者自定義內容"
}];

</script>

# add 寫入紀錄

## 定義和用法

add 用於將內容推送至歷史記錄中

## 語法

```javascript
mochiUndoRedo.add(value, customData);
```

<ParamsTable :data="data"/>

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
