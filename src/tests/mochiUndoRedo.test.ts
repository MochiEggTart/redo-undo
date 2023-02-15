import { MochiUndoRedo } from "../mochiUndoRedo";

const step1 = "One";
const step2 = "Two";

test(`Test Add Step`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    // 新增一個步驟一
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // 新增一個步驟二
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData().value);

    // 判斷資料值是否正確
    expect(step2).toBe(mochiUndoRedo.getData().value);
})

test(`Test Redo/Undo Step`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    // 新增一個步驟一
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // 新增一個步驟二
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // 返回上一步
    mochiUndoRedo.undo();
    // 判斷資料值是否正確
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // 返回下一步
    mochiUndoRedo.redo();
    // 判斷資料值是否正確
    expect(step2).toBe(mochiUndoRedo.getData().value);
})

test(`Test Step Sort`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    const ans = [{
        value:null,
        customData: {}
    },{
        value:step1,
        customData: {}
    },{
        value:step2,
        customData: {}
    }]
    // 新增一個步驟一
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // 新增一個步驟二
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // 判斷排序是否正確
    expect(JSON.stringify(ans)).toBe(JSON.stringify(mochiUndoRedo.getDataList()))

})

test(`Test Step Count`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    // 新增一個步驟一
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // 新增一個步驟二
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // 判斷Count與資料總數是否一致
    const allData = mochiUndoRedo.getDataList();
    expect(allData.length).toBe(mochiUndoRedo.count);

})

test(`Test Step Clear`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    // 新增一個步驟一
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // 新增一個步驟二
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // 清空所有資料
    mochiUndoRedo.clearAll();
    expect(JSON.stringify([{
        value: null,
        customData: {}
    }])).toBe(JSON.stringify(mochiUndoRedo.getDataList()))
})