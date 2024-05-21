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
  const content = await fs.readFile(filePath, 'utf-8')
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
        const name = path.basename(file, '.svg')
        const regularSvg = await readSvgContent(path.join(regularDir, file))
        let solidSvg = ''
        try {
          solidSvg = await readSvgContent(path.join(solidDir, file))
        } catch (error) {
          console.warn(
            `Failed to read solid SVG for ${name}, keeping it empty.`,
          )
        }
        const tsContent = generateTsContent(name, regularSvg, solidSvg)
        await fs.writeFile(path.join(outputDir, `${name}.ts`), tsContent)
        console.log(`Generated TypeScript file for ${name}`)

        // Add to import and element content
        importContent += `export * from './${name}'\n`
        elementContent += `<gds-icon-${toKebabCase(name)} />\n`
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
