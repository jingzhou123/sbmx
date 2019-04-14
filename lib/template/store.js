"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeFn = function (data) { return "import { action, observable } from 'mobx';\n\nexport class " + data.name + "Store {\n    @observable\n    visible = false\n\n    @action\n    init() {\n        //\n    }\n}"; };
