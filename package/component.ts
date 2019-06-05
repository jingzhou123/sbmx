import { writeTmpl as writeTmpl } from './util';
import { componentTmpl } from './template/component';
import { componentStyleTmpl } from './template/component-style';

export function component(name: string) {
    writeTmpl(name, '.component.tsx', componentTmpl)
    writeTmpl(name, '.component.scss', componentStyleTmpl)
}