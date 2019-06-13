"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var service_1 = require("./template/service");
function service(name) {
    util_1.writeTmpl(name, '.service.ts', service_1.serviceFn);
}
exports.service = service;
