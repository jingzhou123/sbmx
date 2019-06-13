import { writeTmpl as writeTmpl } from './util';
import { storeFn } from './template/store';

export function store(name: string) {
    writeTmpl(name, '.store', storeFn)
}