"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var component_1 = require("./template/component");
function component(name) {
    util_1.writeTmpl(name, '.component.tsx', component_1.componentTmpl);
}
exports.component = component;
