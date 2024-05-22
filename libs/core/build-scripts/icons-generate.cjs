const fs = require('fs').promises
const path = require('path')

const regularDir = path.resolve(
  __dirname,
  '../src/components/icon/assets/regular',
)
const solidDir = path.resolve(__dirname, '../src/components/icon/assets/solid')
const outputDir = path.resolve(__dirname, '../src/components/icon/icons')

function toKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase()
}

async function readSvgContent(filePath) {
  let content = await fs.readFile(filePath, 'utf-8')
  content = content.replace(/#353531/g, 'currentColor')
  return content.replace(/<\/?svg[^>]*>/g, '')
}

function generateTsContent(name, regularSvg, solidSvg) {
  const className = `Icon${toPascalCase(name)}`
  const tagName = `gds-icon-${toKebabCase(name)}`

  return `
import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('${tagName}')
export class ${className} extends GdsIcon {
  static _regularSVG = \`${regularSvg}\`
  static _solidSVG = \`${solidSvg}\`
}
  `.trim()
}

const mdxFile = path.resolve(__dirname, '../src/components/icon/icon.list.mdx')
const tsFile = path.resolve(__dirname, '../src/components/icon/icons/index.ts')

async function generateIcons() {
  try {
    const regularFiles = await fs.readdir(regularDir)
    let importContent = ''
    let elementContent = '<Canvas>\n'
    for (const file of regularFiles) {
      if (path.extname(file) === '.svg') {
        let oldName = path.basename(file, '.svg')
        let newName = oldName.split(',')[0] // get the part before the first comma

        // Rename the files in the regular and solid directories
        await fs.rename(
          path.join(regularDir, file),
          path.join(regularDir, `${newName}.svg`),
        )
        try {
          await fs.rename(
            path.join(solidDir, file),
            path.join(solidDir, `${newName}.svg`),
          )
        } catch (error) {
          console.warn(`Failed to rename solid SVG for ${oldName}.`)
        }

        const regularSvg = await readSvgContent(
          path.join(regularDir, `${newName}.svg`),
        )
        let solidSvg = ''
        try {
          solidSvg = await readSvgContent(path.join(solidDir, `${newName}.svg`))
        } catch (error) {
          console.warn(
            `Failed to read solid SVG for ${newName}, keeping it empty.`,
          )
        }

        const tsContent = generateTsContent(newName, regularSvg, solidSvg)
        await fs.writeFile(path.join(outputDir, `${newName}.ts`), tsContent)
        console.log(`Generated TypeScript file for ${newName}`)

        // Add to import and element content
        importContent += `export * from './${newName}'\n`
        elementContent += `<gds-icon-${toKebabCase(newName)}></gds-icon-${toKebabCase(newName)}>\n`
      }
    }
    elementContent += '</Canvas>\n'

    // Write MDX and TS files
    await fs.writeFile(mdxFile, elementContent)
    console.log(`Generated MDX file at ${mdxFile}`)
    await fs.writeFile(tsFile, importContent)
    console.log(`Generated TS file at ${tsFile}`)
  } catch (error) {
    console.error(error)
  }
}

generateIcons()
