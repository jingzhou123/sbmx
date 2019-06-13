import { writeTmpl as writeTmpl } from './util';
import { componentTmpl } from './template/component';
import { componentStyleTmpl } from './template/component-style';
import { storeFn } from './template/store';

export function component(name: string) {
    writeTmpl(name, '.component.tsx', componentTmpl)
    writeTmpl(name, '.component.scss', componentStyleTmpl)
    writeTmpl(name, '.store.ts', storeFn)
}