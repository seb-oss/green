import * as fs from 'fs-extra'
import { Dictionary, Platform } from 'style-dictionary'

export default {
  copy_package_json: {
    name: 'copy_package_json',
    do: function (dictionary: Dictionary, config: Platform) {
      console.log('Copying package.json')
      console.log(config)
      fs.copySync('package.json', config.buildPath + '..')
    },
    undo: function (dictionary: Dictionary, config: Platform) {
      console.log('Cleaning assets directory')
      console.log(config)
      fs.removeSync(config.buildPath + '../package.json')
    },
  },
}
