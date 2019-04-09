import { apiFn } from './template/api'
import { writeTmpl } from './util';

export function api(name: string) {
    return writeTmpl(name, '.api.ts', apiFn)
}