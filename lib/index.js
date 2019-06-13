"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var api_1 = require("./api");
var component_1 = require("./component");
var store_1 = require("./store");
var service_1 = require("./service");
var pkg = require('../package.json');
program
    .version(pkg.version, '-v --version');
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
program
    .command('service <name>')
    .description('generate service')
    .action(service_1.service);
program
    .command('help')
    .description('Print this help')
    .action(function () {
    program.outputHelp();
});
program.parse(process.argv);
