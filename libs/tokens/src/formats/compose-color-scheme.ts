import { createPropertyFormatter, fileHeader } from 'style-dictionary/utils'

import ComposeColorSchemeTemplate from '../templates/compose/color-scheme.template.ts'

const composeColorScheme = {
  name: 'compose/color-scheme',
  format: async ({ dictionary, options, file }) => {
    return ComposeColorSchemeTemplate({
      allTokens: dictionary.allTokens,
      formatProperty: createPropertyFormatter({
        outputReferences: options.outputReferences,
        dictionary,
        formatting: {
          prefix: '',
          suffix: ',',
          separator: ' =',
        },
        usesDtcg: options.usesDtcg,
      }),
      options,
      header: await fileHeader({ file }),
    })
  },
}

export default composeColorScheme
