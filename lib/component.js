"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var component_1 = require("./template/component");
var component_style_1 = require("./template/component-style");
function component(name) {
    util_1.writeTmpl(name, '.component.tsx', component_1.componentTmpl);
    util_1.writeTmpl(name, '.component.scss', component_style_1.componentStyleTmpl);
}
exports.component = component;
