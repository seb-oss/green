const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const prettierConfig = import('../../../prettier.config.mjs')
const { getAllComponents } = require('./shared.cjs')
//const { inspect } = require('util')

const reactDir = path.join('libs/core/src/generated/react')

// Clear build directory
if (fs.existsSync(reactDir)) {
  fs.rmSync(reactDir, { recursive: true })
}
fs.mkdirSync(reactDir, { recursive: true })

// Fetch component metadata
const metadata = JSON.parse(
  fs.readFileSync(path.join('libs/core/custom-elements.json'), 'utf8'),
)
const components = getAllComponents(metadata)
const filteredComponents = components
  .filter((component) => component.tagName)
  .filter((component) => component.tagName.indexOf('icon') === -1)
const index = []
let i = 0

for (const component of filteredComponents) {
  const tagWithoutPrefix = component.tagName.replace(/^gds-/, '')
  const componentDir = path.join(reactDir, tagWithoutPrefix)
  const componentFile = path.join(componentDir, 'index.ts')
  const importPath = component.path
    .replace(/\.ts$/, '.js')
    .replace(/^src\//, '')

  fs.mkdirSync(componentDir, { recursive: true })

  const jsDoc = component.jsDoc || ''

  prettier
    .format(
      `
        import { getReactComponent } from '../../../utils/react';
        import type { ${component.name} as ${component.name}Type } from '../../../${importPath}';

        ${jsDoc}
        export const ${component.name} = getReactComponent<${component.name}Type>('${component.tagName}');
      `,
      Object.assign(prettierConfig, {
        parser: 'babel-ts',
      }),
    )
    .then((formattedSource) => {
      index.push(`export { ${component.name} } from './${tagWithoutPrefix}';`)

      fs.writeFileSync(componentFile, formattedSource, 'utf8')

      i++

      if (i === filteredComponents.length) {
        fs.writeFileSync(
          path.join(reactDir, 'index.ts'),
          index.join('\n'),
          'utf8',
        )
      }
    })
}
