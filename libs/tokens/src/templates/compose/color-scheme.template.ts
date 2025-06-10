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
      `  ${token.comment ? `/** ${token.comment} */\n  ` : ''}${options.accessControl ? `${options.accessControl} ` : ''} ${formatProperty({ ...token, name: token.name.replace('sysColor', '') })}`,
  )
  .join('\n')}
)\n`
