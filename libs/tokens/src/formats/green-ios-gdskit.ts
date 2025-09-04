import { fileHeader } from 'style-dictionary/utils'

import template from '../templates/ios/gdskit.template.ts'

const greenIosGdsKit = {
  name: 'green/ios-swift-gdskit',
  format: async ({ options, file }) => {
    const header = await fileHeader({ file })
    return template({ file, options, header })
  },
}

export default greenIosGdsKit
