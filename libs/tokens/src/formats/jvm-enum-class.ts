import { createPropertyFormatter, fileHeader } from 'style-dictionary/utils'

import EnumClassTemplate from '../templates/jvm/enum-class.template.js'

const enumClass = {
  name: 'jvm/enum-class',
  format: async ({ dictionary, options, file }) => {
    return EnumClassTemplate({
      allTokens: dictionary.allTokens,
      formatProperty: createPropertyFormatter({
        outputReferences: options.outputReferences,
        dictionary,
        formatting: {
          prefix: '',
          suffix: ',',
          separator: ' =',
        },
      }),
      options,
      header: await fileHeader({ file }),
    })
  },
}

export default enumClass
