type TemplateOptions = {
  header: string
  file: File
  options: {
    imports?: string[]
  }
}

export default ({ file, header, options }: TemplateOptions): string => `
${header}
${
  options.imports
    ? options.imports.map((item) => `@_exported import ${item}`).join('\n')
    : ''
}
`
