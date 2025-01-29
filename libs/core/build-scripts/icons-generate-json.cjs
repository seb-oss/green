const fs = require('fs').promises
const path = require('path')

// Define directories
const regularDir = path.resolve(__dirname, 'assets/regular')
const solidDir = path.resolve(__dirname, 'assets/solid')
const outputDir = path.resolve(__dirname, 'icons')

/**
 * Utility function to create a delay
 * @param {number} ms - Milliseconds to delay
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Convert string to kebab case
 * @param {string} str - Input string
 */
function toKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Convert string to Title Case
 * @param {string} str - Input string
 */
function toTitleCase(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Extract SVG content and normalize it
 * @param {string} filePath - Path to SVG file
 */
async function extractSvgContent(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf-8')
    // Replace color with currentColor
    content = content.replace(/#353531/g, 'currentColor')
    // Extract only the path elements
    const pathMatch = content.match(/<path[^>]*>.*?<\/path>/g)
    return pathMatch ? pathMatch.join('\n').replace(/\s*\n\s*/g, '') : ''
  } catch (error) {
    console.warn(`Failed to process ${filePath}: ${error.message}`)
    return ''
  }
}

/**
 * Generate the icon library
 */
async function generateIconLibrary() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true })

    // Read all SVG files
    const regularFiles = await fs.readdir(regularDir)
    const iconLibrary = {}
    let indexContent = '// Generated icon library index\n\n'

    for (const file of regularFiles) {
      if (path.extname(file) !== '.svg') continue

      const iconName = path.basename(file, '.svg')
      console.log(`Processing icon: ${iconName}`)

      // Extract SVG content
      const regularSvg = await extractSvgContent(
        path.join(regularDir, `${iconName}.svg`),
      )
      const solidSvg = await extractSvgContent(
        path.join(solidDir, `${iconName}.svg`),
      )

      // Create icon metadata
      const iconData = {
        id: iconName,
        displayName: toTitleCase(iconName),
        fileName: `${iconName}.svg`,
        urlPath: iconName,
        variants: {
          regular: regularSvg,
          solid: solidSvg,
        },
        meta: {
          description: '',
          categories: [],
          tags: [],
        },
      }

      iconLibrary[iconName] = iconData
      indexContent += `export { default as ${iconName}Icon } from './${iconName}';\n`

      // Generate individual icon file
      const iconFileContent = `
/**
 * @fileoverview Icon component for ${iconData.displayName}
 * @element gds-icon-${toKebabCase(iconName)}
 */

export default {
  id: '${iconData.id}',
  displayName: '${iconData.displayName}',
  fileName: '${iconData.fileName}',
  urlPath: '${iconData.urlPath}',
  variants: {
    regular: \`${iconData.variants.regular}\`,
    solid: \`${iconData.variants.solid}\`
  },
  meta: {
    description: '',
    categories: [],
    tags: []
  }
};
`

      await fs.writeFile(
        path.join(outputDir, `${iconName}.js`),
        iconFileContent.trim(),
      )

      // Add delay to prevent overwhelming the file system
      await delay(100)
    }

    // Write main library file
    await fs.writeFile(
      path.join(outputDir, 'icon-library.json'),
      JSON.stringify(iconLibrary, null, 2),
    )

    // Write index file
    await fs.writeFile(path.join(outputDir, 'index.js'), indexContent)

    // Generate types file
    const typesContent = `
/**
 * @typedef {Object} IconVariants
 * @property {string} regular - Regular style SVG content
 * @property {string} solid - Solid style SVG content
 */

/**
 * @typedef {Object} IconMetadata
 * @property {string} id - Icon identifier
 * @property {string} displayName - Human readable name
 * @property {string} fileName - SVG filename
 * @property {string} urlPath - URL-safe path
 * @property {IconVariants} variants - Icon variants
 * @property {Object} meta - Additional metadata
 */

export {};
`

    await fs.writeFile(path.join(outputDir, 'types.d.ts'), typesContent.trim())

    console.log(`Successfully generated icon library in ${outputDir}`)
    console.log(`Total icons processed: ${Object.keys(iconLibrary).length}`)
  } catch (error) {
    console.error('Failed to generate icon library:', error)
    process.exit(1)
  }
}

// Run the script
generateIconLibrary()
