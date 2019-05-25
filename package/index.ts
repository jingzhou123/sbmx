import * as program from 'commander'
import { api } from './api';
import { component } from './component';
import { store } from './store';
import { serviceFn } from './template/service';
const pkg = require('../package.json')

program
  .version(pkg.version)

program
  .command('api <name>')
  .description('generate api')
  .action(api)

program
  .command('component <name>')
  .description('generate react component')
  .action(component)

program
  .command('store <name>')
  .description('generate store')
  .action(store)

program
  .command('service <name>')
  .description('generate service')
  .action(serviceFn)

program.parse(process.argv);