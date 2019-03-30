"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var _ = require("lodash");
function getFileContext(componentName) {
    return 'import React, { Component } from "react"\n\n' +
        'export class ' + componentName + ' {\n' +
        '\trender() {\n' +
        '\t\treturn <div></div>\n' +
        '\t}\n' +
        '}';
}
function component(name) {
    var camel = _.camelCase(name);
    var kebab = _.kebabCase(name); // foo-bar
    var upper = _.upperFirst(camel);
    var filePath = kebab + '-component.tsx';
    if (fs.existsSync(filePath)) {
        console.warn('file existed');
        process.exit(0);
    }
    else {
        fs.writeFileSync(filePath, getFileContext(upper));
    }
}
exports.component = component;
