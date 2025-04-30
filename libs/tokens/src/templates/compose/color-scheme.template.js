/**
 * Converts a string to PascalCase.
 * @param {string} str - The input string.
 * @returns {string} - The string converted to PascalCase.
 */
function toPascalCase(str) {
  return str
    .replace(/(^\w|_\w)/g, (match) => match.replace('_', '').toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '')
}

export default ({ allTokens, options, header, formatProperty }) => `
${header}

package ${options.packageName ?? ''}

${options.import.map(/** @param {string} item */ (item) => `import ${item}`).join('\n')}

${options.accessControl ? `${options.accessControl} ` : ''}${
  options.objectType ? `${options.objectType} ` : ''
}${options.variableName ? `${options.variableName} ` : ''}= ${options.className ? `${options.className}` : ''}(
${allTokens
  .map(
    (token) =>
      `  ${token.comment ? `/** ${token.comment} */\n  ` : ''}${options.accessControl ? `${options.accessControl} ` : ''} ${formatProperty(token)}`,
  )
  .join('\n')}
)\n`
