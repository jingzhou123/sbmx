export const componentTmpl = (data: any) => `import React, { Component } from 'react';
import './${data.kebabName}.component.scss'
import { ${data.name}Store } from './${data.kebabName}.store'

export interface I${data.name}Props {
    store: ${data.name}Store
}

export class ${data.name} extends Component<I${data.name}Props> {
    render() {
        const store = this.props.store;

        return <div className='${data.kebabName}-component'>
            test
        </div>
    }
}`