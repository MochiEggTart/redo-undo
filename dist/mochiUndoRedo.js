"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MochiUndoRedo = void 0;
var MochiUndoRedo = /** @class */ (function () {
    function MochiUndoRedo() {
        //紀錄(上一步)
        this.past = [];
        //目前紀錄
        this.present = {
            value: null,
            customData: {}
        };
        //紀錄(下一步)
        this.future = [];
    }
    Object.defineProperty(MochiUndoRedo.prototype, "count", {
        //取得步驟數量
        get: function () {
            var dataList = this.getDataList();
            return dataList.length;
        },
        enumerable: false,
        configurable: true
    });
    //取得目前步驟資料
    MochiUndoRedo.prototype.getData = function (index) {
        if (index) {
            return __spreadArray(__spreadArray(__spreadArray([], this.past, true), [this.present], false), this.future, true)[index];
        }
        return this.present;
    };
    //取得整個步驟陣列
    MochiUndoRedo.prototype.getDataList = function () {
        return __spreadArray(__spreadArray(__spreadArray([], this.past, true), [this.present], false), this.future, true);
    };
    //寫入紀錄
    MochiUndoRedo.prototype.add = function (value, customData) {
        if (customData === void 0) { customData = {}; }
        var data = {
            value: value,
            customData: customData
        };
        this.past.push(this.present);
        this.present = data;
        this.future = [];
    };
    //上一步
    MochiUndoRedo.prototype.undo = function (count) {
        if (count === void 0) { count = 1; }
        if (count < 1) {
            return;
        }
        var _a = this, past = _a.past, future = _a.future, present = _a.present;
        if (past.length > 0) {
            var pos = past.length - count;
            var previous = past[pos];
            var newthis = past.slice(0, pos);
            this.past = newthis;
            this.future = __spreadArray(__spreadArray(__spreadArray([], past.slice(pos + 1, past.length), true), [present], false), future, true);
            this.present = previous;
        }
    };
    //下一步
    MochiUndoRedo.prototype.redo = function (count) {
        if (count === void 0) { count = 1; }
        if (count < 1) {
            return;
        }
        var _a = this, past = _a.past, future = _a.future, present = _a.present;
        if (this.future.length > 0) {
            var next = future[count - 1];
            var newthis = future.slice(count);
            this.past = __spreadArray(__spreadArray(__spreadArray([], past, true), [present], false), future.slice(0, count - 1), true);
            this.present = next;
            this.future = newthis;
        }
    };
    //清空所有紀錄
    MochiUndoRedo.prototype.clearAll = function () {
        this.past = [];
        this.present = {
            value: null,
            customData: {}
        };
        this.future = [];
    };
    return MochiUndoRedo;
}());
exports.MochiUndoRedo = MochiUndoRedo;
