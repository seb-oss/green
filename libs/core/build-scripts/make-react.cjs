const commandLineArgs = require('command-line-args')
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const prettierConfig = import('../../../prettier.config.mjs')
const { getAllComponents } = require('./shared.cjs')

const { outdir } = commandLineArgs({ name: 'outdir', type: String })

const reactDir = path.join('./libs/react/src/core')

// Clear build directory
if (fs.existsSync(reactDir)) {
  fs.rmSync(reactDir, { recursive: true })
}
fs.mkdirSync(reactDir, { recursive: true })

// Fetch component metadata
const metadata = JSON.parse(fs.readFileSync(path.join('libs/core/custom-elements.json'), 'utf8'))
const components = getAllComponents(metadata)
const index = []

for (const component of components) {
  if (component.tagName && component.tagName.indexOf('icon') === -1) {
    const tagWithoutPrefix = component.tagName.replace(/^gds-/, '')
    const componentDir = path.join(reactDir, tagWithoutPrefix)
    const componentFile = path.join(componentDir, 'index.ts')
    const importPath = component.path.replace(/\.ts$/, '.js').replace(/^src\//, '')
    const events = (component.events || [])
      .map(event => `${event.reactName}: '${event.name}' as EventName<${event.eventName}>`)
      .join(',\n')

    fs.mkdirSync(componentDir, { recursive: true })

    const jsDoc = component.jsDoc || ''

    prettier
      .format(
        `
        import * as React from 'react';
        import { createComponent } from '@lit/react';
        import { getScopedTagName } from '@sebgroup/green-core/scoping'
        import { ${component.name} } from '@sebgroup/green-core/${importPath}';
  
        const tagName = getScopedTagName('${component.tagName}')
        //${component.name}.define('${component.tagName}')
  
        ${jsDoc}
        const reactWrapper = createComponent({
          tagName,
          elementClass: ${component.name},
          react: React,
          events: {
            ${events}
          },
          displayName: "${component.name}"
        })
  
        export default reactWrapper
      `,
        Object.assign(prettierConfig, {
          parser: 'babel-ts'
        })
      )
      .then(formattedSource => {
        index.push(`export { default as ${component.name} } from './${tagWithoutPrefix}/index.js';`)

        fs.writeFileSync(componentFile, formattedSource, 'utf8')
      })
  }
}

// Generate the index file
fs.writeFileSync(path.join(reactDir, 'index.ts'), index.join('\n'), 'utf8')
