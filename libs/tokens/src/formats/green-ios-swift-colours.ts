import { createPropertyFormatter, fileHeader } from 'style-dictionary/utils'

import template from '../templates/ios/color.template.ts'

export default {
  name: 'green/ios-swift-colours',
  format: async ({ dictionary, options, file, platform }) => {
    return template({
      allTokens: dictionary.allTokens,
      header: await fileHeader(file),
      options,
    })
  },
}
