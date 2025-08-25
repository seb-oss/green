const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const prettierConfig = import('../../../prettier.config.mjs')
const { getAllComponents } = require('./shared.cjs')

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
const filteredComponents = components.filter((component) => component.tagName)
const index = []
let i = 0

for (const component of filteredComponents) {
  const tagWithoutPrefix = component.tagName.replace(/^gds-/, '')
  const subDir = component.tagName.includes('icon') ? 'icons/' : ''
  const componentDir = path.join(path.join(reactDir, subDir), tagWithoutPrefix)
  const componentFile = path.join(componentDir, 'index.ts')
  const importPath = component.path.replace(/^src\//, '').replace(/\.ts$/, '')

  fs.mkdirSync(componentDir, { recursive: true })

  const jsDoc = component.jsDoc || ''

  const levels = subDir.length > 0 ? '../../../..' : '../../..'

  // We allow the use of react as an extraneous dependency here because we expect any consumer
  // that imports React components from Green Core to already have React as a dependency.
  prettier
    .format(
      `
        import { getReactComponent } from '${levels}/utils/react';
        import { ${component.name} as ${component.name}Class } from '${levels}/${importPath}';

        // eslint-disable-next-line import/no-extraneous-dependencies
        import { createElement } from 'react';

        ${jsDoc}
        export const ${component.name} = (props: React.ComponentProps<ReturnType<typeof getReactComponent<${component.name}Class>>>) => {
          ${component.name}Class.define();
          const JSXElement = getReactComponent<${component.name}Class>('${component.tagName}');
          const propsWithClass = {...props, class: props.className}
          return createElement(JSXElement, propsWithClass);
        };
      `,
      Object.assign(prettierConfig, {
        parser: 'babel-ts',
      }),
    )
    .then((formattedSource) => {
      index.push(`export * from './${subDir}${tagWithoutPrefix}/index.js';`)

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
