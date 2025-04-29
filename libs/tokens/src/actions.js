import * as fs from 'fs-extra'

export default {
  copy_package_json: {
    name: 'copy_package_json',
    do: function (dictionary, config) {
      console.log('Copying package.json')
      console.log(config)
      fs.copySync('package.json', config.buildPath + '..')
    },
    undo: function (dictionary, config) {
      console.log('Cleaning assets directory')
      console.log(config)
      fs.removeSync(config.buildPath + '../package.json')
    },
  },
}
