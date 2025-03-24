const fs = require('fs').promises
const path = require('path')

const regularDir = path.resolve(
  __dirname,
  '../src/components/icon/assets/regular',
)
const solidDir = path.resolve(__dirname, '../src/components/icon/assets/solid')
const outputDir = path.resolve(__dirname, '../src/components/icon/icons')

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function toKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase()
}

async function replaceInFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8')
  content = content.replace(/#353531/g, 'currentColor')
  await fs.writeFile(filePath, content, 'utf-8')
  return content.replace(/<\/?svg[^>]*>/g, '')
}

function generateComponentTsContent(name, regularSvg, solidSvg) {
  const className = `Icon${toPascalCase(name)}`
  const tagName = `gds-icon-${toKebabCase(name)}`

  // Remove line breaks and leading/trailing spaces
  regularSvg = regularSvg.replace(/\s*\n\s*/g, '')
  solidSvg = solidSvg.replace(/\s*\n\s*/g, '')

  return `import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element ${tagName}
 */
@gdsCustomElement('${tagName}')
export class ${className} extends GdsIcon {
  /** @private */
  static _regularSVG = \`${regularSvg}\`
  /** @private */
  static _solidSVG = \`${solidSvg}\`
  /** @private */
  static _name = '${toKebabCase(name)}'
}`.trim()
}

function generateTsContent(name) {
  const className = `Icon${toPascalCase(name)}`
  return `import { ${className} } from './${name}.component'

${className}.define()

export { ${className} }`
}

async function renameFiles() {
  const regularFiles = await fs.readdir(regularDir)
  let tsIndexContent = ''
  let mdxContent = ''

  for (const file of regularFiles) {
    if (path.extname(file) === '.svg') {
      let oldName = path.basename(file, '.svg')
      let newName = oldName.split(',')[0] // get the part before the first comma

      // Rename the files in the regular and solid directories
      try {
        await fs.rename(
          path.join(regularDir, file),
          path.join(regularDir, `${newName}.svg`),
        )
        console.log(
          `%cRenamed ${oldName} to ${newName} in regular directory`,
          'color: green',
        )
        const regularSvg = await replaceInFile(
          path.join(regularDir, `${newName}.svg`),
        )
        console.log(
          `%cReplaced #353531 with currentColor in ${newName}.svg in regular directory`,
          'color: blue',
        )

        let solidSvg = ''
        try {
          await fs.rename(
            path.join(solidDir, file),
            path.join(solidDir, `${newName}.svg`),
          )
          console.log(
            `%cRenamed ${oldName} to ${newName} in solid directory`,
            'color: green',
          )
          solidSvg = await replaceInFile(path.join(solidDir, `${newName}.svg`))
          console.log(
            `%cReplaced #353531 with currentColor in ${newName}.svg in solid directory`,
            'color: blue',
          )
        } catch (error) {
          console.warn(
            `%cFailed to rename ${oldName} in solid directory. Error: ${error.message}`,
            'color: orange',
          )
        }

        const componentTsContent = generateComponentTsContent(
          newName,
          regularSvg,
          solidSvg,
        )
        await fs.writeFile(
          path.join(outputDir, `${newName}.component.ts`),
          componentTsContent,
        )
        console.log(`Generated ${newName}.component.ts`)

        const tsContent = generateTsContent(newName)
        await fs.writeFile(path.join(outputDir, `${newName}.ts`), tsContent)
        console.log(`Generated ${newName}.ts`)

        tsIndexContent += `export * from './${newName}'\n`
        mdxContent += `<gds-icon-${toKebabCase(newName)}></gds-icon-${toKebabCase(newName)}>\n`
      } catch (error) {
        console.error(
          `%cFailed to rename ${oldName} in regular directory. Error: ${error.message}`,
          'color: red',
        )
        continue // Skip to the next file
      }
    }
  }

  await fs.writeFile(path.join(outputDir, 'index.ts'), tsIndexContent)
  console.log('Generated index.ts file')

  // const mdxFile = path.resolve(
  //   __dirname,
  //   '../src/components/icon/icon.list.mdx',
  // )
  // await fs.writeFile(mdxFile, mdxContent)
  // console.log('Generated icon.list.mdx file')
}

async function main() {
  await renameFiles()
}

main()
