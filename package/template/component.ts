export const componentTmpl = (data: any) => `import React, { Component } from 'react';

export interface I${data.name}Props {
    store: ${data.name}Store
}

export class ${data.name} extends Component<I${data.name}Props> {
    render() {
        const store = this.props.store;

        return <div>
            test
        </div>
    }
}
`