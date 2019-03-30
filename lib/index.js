"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var api_1 = require("./api");
var component_1 = require("./component");
var pkg = require('../package.json');
program
    .version(pkg.version);
program
    .command('api <name>')
    .description('generate api')
    .action(api_1.api);
program
    .command('component <name>')
    .description('generate react component')
    .action(component_1.component);
program.parse(process.argv);
