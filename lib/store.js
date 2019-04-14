"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var store_1 = require("./template/store");
function store(name) {
    util_1.writeTmpl(name, '.store.ts', store_1.storeFn);
}
exports.store = store;
