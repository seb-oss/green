const fs = require('fs').promises
const path = require('path')

// Define directories and base URL
const regularDir = path.resolve(
  __dirname,
  '../src/components/icon/assets/regular',
)
const solidDir = path.resolve(__dirname, '../src/components/icon/assets/solid')
const outputDir = path.resolve(__dirname, '../src/components/icon/json')

// Base URL for raw GitHub content
const BASE_GITHUB_URL =
  'https://raw.githubusercontent.com/seb-oss/green/refs/heads/main/libs/core/src/components/icon/assets'

/**
 * Generate static URLs for the icon
 * @param {string} iconName - Name of the icon
 */
function generateStaticUrls(iconName) {
  return {
    regular: `${BASE_GITHUB_URL}/regular/${iconName}.svg`,
    solid: `${BASE_GITHUB_URL}/solid/${iconName}.svg`,
  }
}

/**
 * Convert string to Pascal Case
 * @param {string} str - Input string
 */
function toPascalCase(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

/**
 * Generate framework-specific metadata
 * @param {string} iconName - Name of the icon
 */
function generateFrameworkData(iconName) {
  const pascalName = toPascalCase(iconName)

  return {
    web: {
      path: `@sebgroup/green-core/icon/${iconName}`,
      import: `import '@sebgroup/green-core/icon/${iconName}.js'`,
      component: `<gds-icon-${iconName}></gds-icon-${iconName}>`,
    },
    react: {
      path: `@sebgroup/green-react/icon/${iconName}`,
      import: `import { Icon${pascalName} } from '@sebgroup/green-react/icon/${iconName}'`,
      component: `<Icon${pascalName}></Icon${pascalName}>`,
    },
    angular: {
      path: `@sebgroup/green-angular/icon/${iconName}`,
      import: `import { Icon${pascalName} } from '@sebgroup/green-angular/icon/${iconName}'`,
      component: `<gds-icon-${iconName}></gds-icon-${iconName}>`,
    },
  }
}

/**
 * Extract SVG content and normalize it
 * @param {string} filePath - Path to SVG file
 */
async function extractSvgContent(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf-8')
    const svgContentMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)

    if (svgContentMatch && svgContentMatch[1]) {
      let innerContent = svgContentMatch[1].trim()
      innerContent = innerContent.replace(/#353531/g, 'currentColor')
      return innerContent
    }

    console.warn(`No SVG content found in ${filePath}`)
    return ''
  } catch (error) {
    console.warn(`Failed to process ${filePath}: ${error.message}`)
    return ''
  }
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

async function generateIconLibrary() {
  try {
    await fs.mkdir(outputDir, { recursive: true })
    const regularFiles = await fs.readdir(regularDir)
    const iconLibrary = {}

    for (const file of regularFiles) {
      if (path.extname(file) !== '.svg') continue

      const iconName = path.basename(file, '.svg')
      console.log(`Processing icon: ${iconName}`)

      // Process regular variant
      const regularPath = path.join(regularDir, file)
      const regularContent = await extractSvgContent(regularPath)
      if (regularContent) {
        console.log(`✅ Filled regular variant for: ${iconName}`)
      } else {
        console.log(`❌ Failed to fill regular variant for: ${iconName}`)
      }

      // Process solid variant
      const solidPath = path.join(solidDir, file)
      const solidContent = await extractSvgContent(solidPath)
      if (solidContent) {
        console.log(`✅ Filled solid variant for: ${iconName}`)
      } else {
        console.log(`❌ Failed to fill solid variant for: ${iconName}`)
      }

      // Create icon metadata with framework information and static URLs
      iconLibrary[iconName] = {
        id: iconName,
        displayName: toTitleCase(iconName),
        fileName: `${iconName}.svg`,
        urlPath: iconName,
        variants: {
          regular: regularContent,
          solid: solidContent,
        },
        static: generateStaticUrls(iconName),
        meta: {
          description: '',
          categories: [],
          tags: [],
        },
        framework: generateFrameworkData(iconName),
      }

      console.log(`✅ Completed processing: ${iconName}\n`)
    }

    // Write the complete library file
    const outputPath = path.join(outputDir, 'icons.json')
    await fs.writeFile(outputPath, JSON.stringify(iconLibrary, null, 2))

    console.log(`Successfully generated icon library at ${outputPath}`)
    console.log(`Total icons processed: ${Object.keys(iconLibrary).length}`)

    // Generate a summary
    // const summary = {
    //   totalIcons: Object.keys(iconLibrary).length,
    //   missingRegular: Object.entries(iconLibrary)
    //     .filter(([_, data]) => !data.variants.regular)
    //     .map(([name]) => name),
    //   missingSolid: Object.entries(iconLibrary)
    //     .filter(([_, data]) => !data.variants.solid)
    //     .map(([name]) => name),
    // };

    // const summaryPath = path.join(outputDir, 'summary.json');
    // await fs.writeFile(summaryPath, JSON.stringify(summary, null, 2));
    // console.log(`Generated summary at ${summaryPath}`);
  } catch (error) {
    console.error('Failed to generate icon library:', error)
    process.exit(1)
  }
}

// Run the script
generateIconLibrary()
