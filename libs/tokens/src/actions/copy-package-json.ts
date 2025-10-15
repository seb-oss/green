import * as fs from 'fs-extra'

export default {
  name: 'copy_package_json',
  do: function (dictionary, config) {
    console.log('Copying package.json')
    fs.copySync('package.json', config.buildPath + '..')
  },
  undo: function (dictionary, config) {
    console.log('Cleaning assets directory')
    fs.removeSync(config.buildPath + '../package.json')
  },
}
