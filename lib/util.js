"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var _ = require("lodash");
function writeTmpl(name, surfix, tmplFn) {
    var camel = _.camelCase(name);
    var kebab = _.kebabCase(name); // foo-bar
    var upper = _.upperFirst(camel);
    var filePath = kebab + surfix;
    if (fs.existsSync(filePath)) {
        console.warn('file existed');
        process.exit(0);
    }
    else {
        fs.writeFileSync(filePath, tmplFn({ name: upper }));
    }
}
exports.writeTmpl = writeTmpl;
