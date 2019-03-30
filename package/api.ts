import * as fs from 'fs'
import * as _ from 'lodash'

function getFileContext(apiName: string) {
    return 'export class ' + apiName + 'Api {\n' +
           '\tapi1() {\n' +
           '\t}\n' +
           '}'
}
export function api(name: string) {
    var camel = _.camelCase(name)
    var kebab = _.kebabCase(name) // foo-bar
    var upper = _.upperFirst(camel)
    var filePath = kebab + '.ts'
    if (fs.existsSync(filePath)) {
        console.warn('file existed')
        process.exit(0)
    } else {
        fs.writeFileSync(filePath, getFileContext(upper))
    }
}