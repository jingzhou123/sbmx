"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var api_1 = require("./api");
var component_1 = require("./component");
var store_1 = require("./store");
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
program
    .command('store <name>')
    .description('generate store')
    .action(store_1.store);
program.parse(process.argv);
