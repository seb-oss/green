// Helper function to convert CamelCase to UPPER_SNAKE_CASE
function camelToUpperSnake(str) {
  return str.replace(/([A-Z])/g, '_$1').replace(/^_/, '').toUpperCase();
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
      `    ${token.comment ? `/** ${token.comment} */\n  ` : ''}${options.accessControl ? `${options.accessControl} ` : ''}${camelToUpperSnake(token.name.replace('sysColor', ''))},`,
  )
  .join('\n')}
}\n`
