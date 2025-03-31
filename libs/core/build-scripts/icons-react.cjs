const fs = require('fs').promises
const path = require('path')

const iconsDir = path.resolve(
  __dirname,
  '../src/components/icon/assets/regular',
)
const outputDir = path.resolve(__dirname, '../../react/src/lib/icon/icons')

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase()
}

async function generateReactComponent(name) {
  const className = `Icon${toPascalCase(name)}`
  return `export { ${className} } from '@sebgroup/green-core/react';`
}

async function processIcons() {
  const files = await fs.readdir(iconsDir)
  let indexContent = ''

  for (const file of files) {
    if (path.extname(file) === '.svg') {
      const name = path.basename(file, '.svg')
      const componentName = `Icon${toPascalCase(name)}`

      try {
        const componentContent = await generateReactComponent(name)
        await fs.writeFile(
          path.join(outputDir, `${componentName}.tsx`),
          componentContent,
        )
        console.log(`Generated React component for ${name}`)

        indexContent += `export * from './${componentName}'\n`
      } catch (error) {
        console.error(
          `Failed to generate component for ${name}. Error: ${error.message}`,
        )
        continue // Skip to the next file
      }
    }
  }

  await fs.writeFile(path.join(outputDir, 'index.ts'), indexContent)
  console.log('Generated index.ts file')
}

async function main() {
  await processIcons()
}

main()
