import * as program from 'commander'
import { api } from './api';
import { component } from './component';
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

program.parse(process.argv);