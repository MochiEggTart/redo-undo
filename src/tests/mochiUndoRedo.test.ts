import { MochiUndoRedo, Present } from "../mochiUndoRedo";

test(`MochiUndoRedo Test`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    const step1 = "One";
    const step2 = "Two";
    const step3 = "Three";

    // Get All Data
    const ans = [{
        value: null,
        customData: {}
    }, {
        value: step1,
        customData: {}
    }, {
        value: step2,
        customData: {}
    }, {
        value: step3,
        customData: {}
    }]


    // 新增一個步驟一
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // 新增一個步驟二
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // 新增一個步驟三
    mochiUndoRedo.add(step3);
    expect(step3).toBe(mochiUndoRedo.getData().value);
    // 返回上一步
    mochiUndoRedo.undo();
    // 判斷資料值是否正確
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // 判斷排序是否正確
    expect(JSON.stringify(ans)).toBe(JSON.stringify(mochiUndoRedo.getDataList()))
    // 返回下一步
    mochiUndoRedo.redo();
    // 判斷資料值是否正確
    expect(step3).toBe(mochiUndoRedo.getData().value);
    // 判斷Count與資料總數是否一致
    const allData = mochiUndoRedo.getDataList();
    expect(allData.length).toBe(mochiUndoRedo.count);
    // 判斷資料排序是否正確
    expect(JSON.stringify(ans)).toBe(JSON.stringify(mochiUndoRedo.getDataList()))
    // 清空所有資料
    mochiUndoRedo.clearAll();
    expect(JSON.stringify([{
        value: null,
        customData: {}
    }])).toBe(JSON.stringify(mochiUndoRedo.getDataList()))
    // 清空後查詢數量
    expect(0).toBe(mochiUndoRedo.count);

})