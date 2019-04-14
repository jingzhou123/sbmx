export const storeFn = (data: any) => `import { action, observable } from 'mobx';

export class ${data.name}Store {
    @observable
    visible = false

    @action
    init() {
        //
    }
}`