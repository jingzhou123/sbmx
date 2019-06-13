import { writeTmpl } from './util';
import { serviceFn } from './template/service';

export function service(name: string) {
    writeTmpl(name, '.service.ts', serviceFn)
}