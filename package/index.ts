import * as program from 'commander'
import { api } from './api';
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('api <name>')
  .action(api);

program.parse(process.argv);