interface Present {
    value: any,
    customData?: { [key: string]: any }
}

class MochiUndoRedo {

    //紀錄(上一步)
    private past: Present[] = [];

    //目前紀錄
    private present: Present = {
        value: null,
        customData: {}
    };

    //紀錄(下一步)
    private future: Present[] = [];

    //取得步驟數量
    get count() {
        const dataList = this.getDataList();
        return dataList.length;
    }

    //取得目前步驟資料
    getData(index?: number) {

        if (index) {

            return [...this.past, this.present, ...this.future][index];

        }

        return this.present;

    }

    //取得整個步驟陣列
    getDataList() {
        return [...this.past, this.present, ...this.future];
    }

    //寫入紀錄
    add(value: any, customData: { [key: string]: any } = {}) {

        const data: Present = {
            value,
            customData
        }

        this.past.push(this.present);
        this.present = data;
        this.future = [];
    }

    //上一步
    undo(count: number = 1) {

        if (count < 1) {
            return;
        }

        const { past, future, present } = this;

        if (past.length > 0) {
            const pos = past.length - count;
            const previous = past[pos];
            const newthis = past.slice(0, pos);
            this.past = newthis;
            this.future = [...past.slice(pos + 1, past.length), present, ...future];
            this.present = previous;
        }
    }

    //下一步
    redo(count: number = 1) {

        if (count < 1) {
            return;
        }

        const { past, future, present } = this;

        if (this.future.length > 0) {
            const next = future[count - 1];
            const newthis = future.slice(count);
            this.past = [...past, present, ...future.slice(0, count - 1)];
            this.present = next;
            this.future = newthis;
        }
    }

    //清空所有紀錄
    clearAll() {
        this.past = [];
        this.present = {
            value: null,
            customData: {}
        };
        this.future = [];
    }
}

export { MochiUndoRedo, Present };