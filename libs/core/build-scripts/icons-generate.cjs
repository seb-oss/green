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

function getDeprecationInfo(tagName) {
  try {
    const deprecationPath = path.join(
      __dirname,
      '../src/components/icon/icon.deprecated.ts',
    )
    const deprecationContent = require(deprecationPath)
    return deprecationContent.deprecatedIcons[tagName]
  } catch (error) {
    return null
  }
}

async function extractSvgInfo(filePath) {
  const content = await fs.readFile(filePath, 'utf-8')

  // Extract SVG attributes
  const widthMatch = content.match(/width="(\d+)"/)
  const heightMatch = content.match(/height="(\d+)"/)
  const viewBoxMatch = content.match(/viewBox="([^"]+)"/)

  // Replace color and remove SVG tags
  const processedContent = content
    .replace(/#353531/g, 'currentColor')
    .replace(/<\/?svg[^>]*>/g, '')
    .trim()

  await fs.writeFile(filePath, content.replace(/#353531/g, 'currentColor'))

  return {
    content: processedContent,
    width: widthMatch ? parseInt(widthMatch[1]) : 24,
    height: heightMatch ? parseInt(heightMatch[1]) : 24,
    viewBox: viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24',
  }
}

function generateComponentTsContent(name, regularSvg, solidSvg) {
  const className = `Icon${toPascalCase(name)}`
  const tagName = `gds-icon-${toKebabCase(name)}`

  // Check for deprecation
  const deprecationInfo = getDeprecationInfo(tagName)
  const deprecationComment = deprecationInfo?.useInstead
    ? ` * @deprecated Use \`${deprecationInfo.useInstead}\` instead\n`
    : deprecationInfo
      ? ` * @deprecated This icon is deprecated\n`
      : ''

  // Remove line breaks and leading/trailing spaces from SVG content
  const regularContent = regularSvg.content.replace(/\s*\n\s*/g, '')
  const solidContent = (solidSvg?.content || '').replace(/\s*\n\s*/g, '')

  return `import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element ${tagName}
${deprecationComment} */
@gdsCustomElement('${tagName}')
export class ${className} extends GdsIcon {
  /** @private */
  static _regularSVG = \`${regularContent}\`
  /** @private */
  static _solidSVG = \`${solidContent}\`
  /** @private */
  static _name = '${toKebabCase(name)}'
  /** @private */
  static _width = ${regularSvg.width}
  /** @private */
  static _height = ${regularSvg.height}
  /** @private */
  static _viewBox = '${regularSvg.viewBox}'
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
  let tsPureIndexContent = ''
  let mdxContent = ''

  for (const file of regularFiles) {
    if (path.extname(file) === '.svg') {
      let oldName = path.basename(file, '.svg')
      let newName = oldName.split(',')[0] // get the part before the first comma

      try {
        // Process regular icon
        await fs.rename(
          path.join(regularDir, file),
          path.join(regularDir, `${newName}.svg`),
        )
        console.log(
          `%cRenamed ${oldName} to ${newName} in regular directory`,
          'color: green',
        )
        const regularSvg = await extractSvgInfo(
          path.join(regularDir, `${newName}.svg`),
        )
        console.log(
          `%cProcessed ${newName}.svg in regular directory`,
          'color: blue',
        )

        // Process solid icon
        let solidSvg = null
        try {
          await fs.rename(
            path.join(solidDir, file),
            path.join(solidDir, `${newName}.svg`),
          )
          console.log(
            `%cRenamed ${oldName} to ${newName} in solid directory`,
            'color: green',
          )
          solidSvg = await extractSvgInfo(path.join(solidDir, `${newName}.svg`))
          console.log(
            `%cProcessed ${newName}.svg in solid directory`,
            'color: blue',
          )
        } catch (error) {
          console.warn(
            `%cFailed to process solid icon ${oldName}. Error: ${error.message}`,
            'color: orange',
          )
        }

        // Generate component files
        const componentTsContent = generateComponentTsContent(
          newName,
          regularSvg,
          solidSvg || { content: '', ...regularSvg },
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
        tsPureIndexContent += `export * from './${newName}.component'\n`
        mdxContent += `<gds-icon-${toKebabCase(newName)}></gds-icon-${toKebabCase(newName)}>\n`
      } catch (error) {
        console.error(
          `%cFailed to process ${oldName}. Error: ${error.message}`,
          'color: red',
        )
        continue
      }
    }
  }

  await fs.writeFile(path.join(outputDir, 'index.ts'), tsIndexContent)
  await fs.writeFile(path.join(outputDir, 'pure.ts'), tsPureIndexContent)
  console.log('Generated index.ts file')
}

async function main() {
  await renameFiles()
}

main()
