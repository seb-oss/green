const axios = require('axios')
const fs = require('fs').promises
const path = require('path')

// Configuration
const ICONS_API_URL = 'https://api.seb.io/icons/icons.json'
const regularDir = path.resolve(
  __dirname,
  '../src/components/icon/assets/regular',
)
const solidDir = path.resolve(__dirname, '../src/components/icon/assets/solid')

async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory)
  } catch {
    await fs.mkdir(directory, { recursive: true })
    console.log(`📁 Created directory: ${directory}`)
  }
}

async function writeSvgFile(content, fileName, directory, meta) {
  const filePath = path.join(directory, fileName)
  // Use meta data for SVG attributes
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="${meta.width}" height="${meta.height}" viewBox="${meta.viewBox}">${content}</svg>`
  await fs.writeFile(filePath, svgContent)
  console.log(`✅ Generated: ${fileName} in ${path.basename(directory)}`)
}

async function main() {
  try {
    console.log('🚀 Starting SVG generation from API...')

    // Ensure directories exist
    await ensureDirectoryExists(regularDir)
    await ensureDirectoryExists(solidDir)

    // Fetch icons data
    console.log('📡 Fetching icons data from API...')
    const { data: icons } = await axios.get(ICONS_API_URL)

    console.log(`\n📦 Found ${Object.keys(icons).length} icons to process`)

    // Process each icon
    for (const [key, icon] of Object.entries(icons)) {
      const fileName = icon.fileName

      console.log(`\n🔄 Processing icon: ${fileName}`)
      console.table({
        Name: fileName,
        Width: icon.meta.width,
        Height: icon.meta.height,
        ViewBox: icon.meta.viewBox,
        Category: icon.meta.categories[0],
      })

      // Generate regular variant
      if (icon.variants.regular) {
        await writeSvgFile(
          icon.variants.regular,
          fileName,
          regularDir,
          icon.meta,
        )
      } else {
        console.warn(`⚠️  No regular variant for: ${fileName}`)
      }

      // Generate solid variant
      if (icon.variants.solid) {
        await writeSvgFile(icon.variants.solid, fileName, solidDir, icon.meta)
      } else {
        console.warn(`⚠️  No solid variant for: ${fileName}`)
      }
    }

    // Final summary
    console.log('\n📊 Generation Summary')
    const regularFiles = await fs.readdir(regularDir)
    const solidFiles = await fs.readdir(solidDir)
    console.table({
      'Regular SVGs': regularFiles.length,
      'Solid SVGs': solidFiles.length,
      'Total Icons Processed': Object.keys(icons).length,
    })

    console.log('\n✨ SVG generation completed successfully!')
  } catch (error) {
    console.error('❌ Error:', error.message)
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', error.response.data)
    }
    process.exit(1)
  }
}

main()
