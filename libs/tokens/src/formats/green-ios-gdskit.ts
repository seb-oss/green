import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import _ from 'lodash'
import { fileHeader } from 'style-dictionary/utils'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const greenIosGdsKit = {
  name: 'green/ios-swift-gdskit',
  format: async ({ options, file }) => {
    const header = await fileHeader({ file })
    const template = _.template(
      fs.readFileSync(__dirname + '/../templates/ios/GdsKit.template'),
    )
    return template({ file, options, header })
  },
}

export default greenIosGdsKit
