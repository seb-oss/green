// Helper function to convert CamelCase to UPPER_SNAKE_CASE
function camelToUpperSnake(str) {
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/^_/, '')
    .toUpperCase()
}

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
      `    ${token.comment ? `/** ${token.comment} */\n  ` : ''}${options.accessControl ? `${options.accessControl} ` : ''}${camelToUpperSnake(cleanTokenName(token.name))},`,
  )
  .join('\n')}
}\n`
