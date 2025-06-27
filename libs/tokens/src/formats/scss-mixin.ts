import { fileHeader, formattedVariables } from 'style-dictionary/utils'

const scssMixin = {
  name: 'scss/mixin',
  format: async ({ dictionary, file, options }) => {
    const { outputReferences, usesDtcg } = options
    const header = await fileHeader({ file })
    return (
      header +
      `@mixin add-variables {\n` +
      formattedVariables({
        format: 'css',
        dictionary,
        outputReferences,
        usesDtcg,
      }) +
      `\n}\n`
    )
  },
}

export default scssMixin
