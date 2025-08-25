import { createPropertyFormatter, fileHeader } from 'style-dictionary/utils'

import template from '../templates/ios/extension-swift-uikit.ts'

export default {
  name: 'green/ios-swift-extension',
  format: async ({ dictionary, options, file, platform }) => {
    const formatProperty = createPropertyFormatter({
      outputReferences: options.outputReferences,
      dictionary,
      formatting: {
        prefix: '',
        suffix: ',',
        separator: ' =',
      },
      usesDtcg: options.usesDtcg,
    })

    return template({
      allTokens: dictionary.allTokens,
      header: await fileHeader(file),
      options,
      formatProperty,
    })
  },
}
