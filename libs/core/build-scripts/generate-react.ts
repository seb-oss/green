import fs from 'fs'
import path from 'path'
import prettier from 'prettier'

import prettierConfig from '../../../prettier.config.mjs'
import { CemParser } from '../src/utils/helpers/component-meta'

import type { ComponentData } from '../src/utils/helpers/component-meta.types'

const reactDir = path.join('libs/core/src/generated/react')

async function generateReactComponents() {
  // Clear build directory
  if (fs.existsSync(reactDir)) {
    fs.rmSync(reactDir, { recursive: true })
  }
  fs.mkdirSync(reactDir, { recursive: true })

  console.log('> Parsing component metadata...')

  // Fetch component metadata using CemParser
  // No path needed - uses default path relative to component-meta.ts location
  const { components } = await CemParser.parseAllComponents()

  console.log(`> Found ${components.length} components`)

  // Filter components that have tag names
  const filteredComponents = components.filter(
    (component: ComponentData) => component.tagName,
  )

  console.log(
    `> Generating React wrappers for ${filteredComponents.length} components...`,
  )

  const index: string[] = []
  let completedCount = 0

  for (const component of filteredComponents) {
    const tagWithoutPrefix = component.tagName.replace(/^gds-/, '')
    const subDir = component.tagName.includes('icon') ? 'icons/' : ''
    const componentDir = path.join(
      path.join(reactDir, subDir),
      tagWithoutPrefix,
    )
    const componentFile = path.join(componentDir, 'index.ts')
    const importPath = component.sourcePath
      .replace(/^src\//, '')
      .replace(/\.ts$/, '')

    fs.mkdirSync(componentDir, { recursive: true })

    const jsDoc = component.description
      ? `/** ${component.description.replace(/\*\//g, '*\\/')} */`
      : ''

    const levels = subDir.length > 0 ? '../../../..' : '../../..'

    // We allow the use of react as an extraneous dependency here because we expect any consumer
    // that imports React components from Green Core to already have React as a dependency.
    const formattedSource = await prettier.format(
      `
        import { getReactComponent } from '${levels}/utils/react';
        import { ${component.className} as ${component.className}Class } from '${levels}/${importPath}';

        // eslint-disable-next-line import/no-extraneous-dependencies
        import { createElement } from 'react';

        ${jsDoc}
        export const ${component.className} = (props: React.ComponentProps<ReturnType<typeof getReactComponent<${component.className}Class>>>) => {
          ${component.className}Class.define();
          const JSXElement = getReactComponent<${component.className}Class>('${component.tagName}');
          const propsWithClass = {...props, class: props.className}
          return createElement(JSXElement, propsWithClass);
        };
      `,
      Object.assign({}, prettierConfig, {
        parser: 'babel-ts',
      }),
    )

    index.push(`export * from './${subDir}${tagWithoutPrefix}/index.js';`)

    fs.writeFileSync(componentFile, formattedSource, 'utf8')

    completedCount++

    if (completedCount === filteredComponents.length) {
      fs.writeFileSync(
        path.join(reactDir, 'index.ts'),
        index.join('\n'),
        'utf8',
      )
      console.log(`> ✓ Generated ${completedCount} React components`)
    }
  }
}

// Execute the generator
generateReactComponents().catch((error) => {
  console.error('! Error generating React components:', error)
  process.exit(1)
})
