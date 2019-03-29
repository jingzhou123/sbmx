var _ = require('lodash')
var fs = require('fs')

function getFileContext(apiName) {
    return 'export class ' + apiName + 'Api {\n' +
           '\tapi1() {\n' +
           '\t}\n' +
           '}'
}
module.exports = function api(name) {
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