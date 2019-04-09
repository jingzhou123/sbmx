"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./template/api");
var util_1 = require("./util");
function api(name) {
    return util_1.writeTmpl(name, '.api.ts', api_1.apiFn);
}
exports.api = api;
