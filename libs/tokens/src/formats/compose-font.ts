import { createPropertyFormatter, fileHeader } from 'style-dictionary/utils'

import FontTemplate from '../templates/compose/font.template.ts'

const composeFont = {
  name: 'compose/font',
  format: async ({ dictionary, options, file }) => {
    return FontTemplate({
      allTokens: dictionary.allTokens,
      options,
      header: await fileHeader({ file }),
    })
  },
}

export default composeFont
