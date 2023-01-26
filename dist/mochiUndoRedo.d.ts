interface Present {
    value: any;
    customData?: {
        [key: string]: any;
    };
}
declare class MochiUndoRedo {
    private past;
    private present;
    private future;
    get count(): number;
    getData(index?: number): Present;
    getDataList(): Present[];
    add(value: any, customData?: {
        [key: string]: any;
    }): void;
    undo(count?: number): void;
    redo(count?: number): void;
    clearAll(): void;
}
export { MochiUndoRedo, Present };
