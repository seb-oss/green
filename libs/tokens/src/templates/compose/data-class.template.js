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

export default ({ allTokens, options, header, formatting }) => `
${header}

package ${options.packageName ?? ''}

${options.import.map(/** @param {string} item */ (item) => `import ${item}`).join('\n')}

${options.accessControl ? `${options.accessControl} ` : ''}${
  options.objectType ? `${options.objectType} ` : ''
}class ${options.className ? `${options.className} ` : ''}(
${allTokens
  .map(
    (token) =>
      `  ${token.comment ? `/** ${token.comment} */\n  ` : ''}${options.accessControl ? `${options.accessControl} ` : ''}val ${token.name}: Color,`,
  )
  .join('\n')}
)\n`
