function cleanTokenName(str) {
  return str.replace(/sys|Color|Text/gi, '')
}

export default ({ allTokens, options, header }) => `
${header}

package ${options.packageName ?? ''}

${options.accessControl ? `${options.accessControl} ` : ''}${
  options.objectType ? `${options.objectType} ` : ''
}class ${options.className ? `${options.className} ` : ''}{
${allTokens
  .map(
    (token) =>
      `    ${token.comment ? `/** ${token.comment} */\n  ` : ''}${options.accessControl ? `${options.accessControl} ` : ''}${cleanTokenName(token.name).toUpperCase()},`,
  )
  .join('\n')}
}\n`
