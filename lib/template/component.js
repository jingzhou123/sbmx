"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentTmpl = function (data) { return "import React, { Component } from 'react';\n\nexport interface I" + data.name + "Props {\n    store: " + data.name + "Store\n}\n\nexport class " + data.name + " extends Component<I" + data.name + "Props> {\n    render() {\n        const store = this.props.store;\n\n        return <div>\n            test\n        </div>\n    }\n}\n"; };
