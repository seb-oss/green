import { fileHeader } from 'style-dictionary/utils'

import template from '../templates/ios/package.template.ts'

const greenIosSwiftPackage = {
  name: 'green/ios-swift-package',
  format: async ({ options, file }) => {
    const header = await fileHeader({ file })
    return template({ file, options, header })
  },
}

export default greenIosSwiftPackage
