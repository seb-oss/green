import { fileHeader } from 'style-dictionary/utils'

import ComposeClassTemplate from '../templates/compose/data-class.template.ts'

const composeClass = {
  name: 'compose/class',
  format: async ({ dictionary, options, file }) => {
    return ComposeClassTemplate({
      allTokens: dictionary.allTokens,
      options,
      header: await fileHeader({ file }),
    })
  },
}

export default composeClass
