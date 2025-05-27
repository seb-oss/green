export default ({ allTokens, options, header }) => `
${header}

package ${options.packageName ?? ''}

${options.import.map(/** @param {string} item */ (item) => `import ${item}`).join('\n')}

${options.accessControl ? `${options.accessControl} ` : ''}${
  options.objectType ? `${options.objectType} ` : ''
}class ${options.className ? `${options.className} ` : ''}(
${allTokens
  .map(
    (token) =>
      `  ${token.comment ? `/** ${token.comment} */\n  ` : ''}${options.accessControl ? `${options.accessControl} ` : ''}val ${token.name.replace('sysColorL', 'l')}: Color,`,
  )
  .join('\n')}
)\n`
