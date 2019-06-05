import * as fs from 'fs'
import * as _ from 'lodash'

export function writeTmpl(name: string, surfix: string, tmplFn: (data: any) => string) {
    var camel = _.camelCase(name)
    var kebab = _.kebabCase(name) // foo-bar
    var upper = _.upperFirst(camel)
    var filePath = kebab + surfix
    if (fs.existsSync(filePath)) {
        console.warn('file existed')
        process.exit(0)
    } else {
        fs.writeFileSync(filePath, tmplFn({ name: upper, kebabName: kebab }))
    }
}