"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceFn = function (data) { return "import { action, observable } from 'mobx';\n\nexport class " + data.name + "Service {\n    @observable\n    foo = 'bar'\n\n    @action\n    any() {\n        //\n    }\n}"; };
