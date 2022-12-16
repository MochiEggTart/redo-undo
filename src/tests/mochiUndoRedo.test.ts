import { MochiUndoRedo, Present } from "../mochiUndoRedo";




test(`MochiUndoRedo Test`, () => {
    const mochiUndoRedo = new MochiUndoRedo();
    const step1: Present = {
        name: "Add One Step",
        value: "One",
        customData: {}
    }
    const step2: Present = {
        name: "Add Two Step",
        value: "Two",
        customData: {}
    }
    const step3: Present = {
        name: "Add Three Step",
        value: "Three",
        customData: {}
    }
    // Add Step1
    mochiUndoRedo.add(step1);
    expect(step1).toBe(mochiUndoRedo.getData());
    // Add Step2
    mochiUndoRedo.add(step2);
    expect(step2).toBe(mochiUndoRedo.getData());
    // Add Step3
    mochiUndoRedo.add(step3);
    expect(step3).toBe(mochiUndoRedo.getData());
    // undo
    mochiUndoRedo.undo();
    expect(step2).toBe(mochiUndoRedo.getData());
    // redo
    mochiUndoRedo.redo();
    expect(step3).toBe(mochiUndoRedo.getData());
    // Get Count
    const allData = mochiUndoRedo.getDataList();
    expect(allData.length).toBe(mochiUndoRedo.count);
    // Get All Data
    // expect([step1, step2, step3]).toBe(mochiUndoRedo.getDataList())
    // Get All Data
    // mochiUndoRedo.clearAll();
    // expect([]).toBe(mochiUndoRedo.getDataList())

})