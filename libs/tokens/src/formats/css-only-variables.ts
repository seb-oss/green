import { fileHeader, formattedVariables } from 'style-dictionary/utils'

const cssOnlyVariables = {
  name: 'css/only-variables',
  format: async ({ dictionary, file, options }) => {
    const { outputReferences } = options
    const header = await fileHeader({ file })
    return (
      header +
      (options.colorScheme
        ? `\n  color-scheme: ${options.colorScheme};\n`
        : '') +
      formattedVariables({
        format: 'css',
        dictionary,
        outputReferences,
        usesDtcg: options.usesDtcg,
      })
    )
  },
}

export default cssOnlyVariables
