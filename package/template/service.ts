export const serviceFn = (data: any) => `import { action, observable } from 'mobx';

export class ${data.name}Service {
    @observable
    foo = 'bar'

    @action
    any() {
        //
    }
}`