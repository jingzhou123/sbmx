import { writeTmpl as writeTmpl } from './util';
import { componentTmpl } from './template/component';

export function component(name: string) {
    writeTmpl(name, '.component.tsx', componentTmpl)
}