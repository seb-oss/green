import { createPropertyFormatter, fileHeader } from 'style-dictionary/utils'

import TypographyTemplate from '../templates/compose/typography.template.ts'

const composeColorScheme = {
  name: 'compose/typography',
  format: async ({ dictionary, options, file }) => {
    return TypographyTemplate({
      allTokens: dictionary.allTokens,
      options,
      header: await fileHeader({ file }),
    })
  },
}

export default composeColorScheme
