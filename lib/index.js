"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var api_1 = require("./api");
var pkg = require('../package.json');
program
    .version(pkg.version)
    .command('api <name>')
    .action(api_1.api);
program.parse(process.argv);
