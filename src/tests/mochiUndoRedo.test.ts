import { MochiUndoRedo, Present } from "../mochiUndoRedo";

test(`MochiUndoRedo Test`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    const step1 = "One";
    const step2 = "Two";
    const step3 = "Three";
    // Add Step1
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData().value);
    // Add Step2
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // Add Step3
    mochiUndoRedo.add(step3);
    expect(step3).toBe(mochiUndoRedo.getData().value);
    // undo
    mochiUndoRedo.undo();
    expect(step2).toBe(mochiUndoRedo.getData().value);
    // redo
    mochiUndoRedo.redo();
    expect(step3).toBe(mochiUndoRedo.getData().value);
    // Get Count
    const allData = mochiUndoRedo.getDataList();
    expect(allData.length).toBe(mochiUndoRedo.count);
    // Get All Data
    // expect([step1, step2, step3]).toBe(mochiUndoRedo.getDataList())
    // Get All Data
    // mochiUndoRedo.clearAll();
    // expect([]).toBe(mochiUndoRedo.getDataList())

})