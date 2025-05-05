const axios = require('axios')
const fs = require('fs').promises
const path = require('path')

// Configuration
const ICONS_API_URL = 'https://api.seb.io/icons/icons.json'
const FIGMA_BASE_URL = process.env.FIGMA_BASE_URL // Should be provided in .env
const outputDir = path.resolve(
  __dirname,
  '../src/components/icon/figma-connect',
)

// Helper function to transform nodeId format
function transformNodeId(nodeId) {
  return nodeId.replace(':', '-')
}

// Helper function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function generateFigmaContent(componentTag, nodeId) {
  const transformedNodeId = transformNodeId(nodeId)
  const iconName = componentTag.replace('<gds-icon-', '').split('>')[0]

  const pascalCaseName = kebabToPascalCase(iconName)

  return `import figma, { html } from '@figma/code-connect/html'

figma.connect(
  '${FIGMA_BASE_URL}?node-id=${transformedNodeId}',
  {
    example: () => html\`
      ${componentTag}

      <script>
        import { Icon${pascalCaseName} } from '@sebgroup/green-core/pure'

        Icon${pascalCaseName}.define()
      </script>
    \`,
  },
)
`
}

async function main() {
  try {
    console.log('🚀 Starting Figma code connect generation...')

    // Fetch icons data
    console.log('📡 Fetching icons data from API...')
    const { data: icons } = await axios.get(ICONS_API_URL)

    if (!FIGMA_BASE_URL) {
      throw new Error('FIGMA_BASE_URL environment variable is not set')
    }

    console.log(`\n📦 Found ${Object.keys(icons).length} icons to process`)

    // Process each icon
    for (const [key, icon] of Object.entries(icons)) {
      console.log(`\n🔄 Processing icon: ${icon.displayName}`)

      const webComponent = icon.framework.web.component
      const nodeId = icon.nodeId

      if (!nodeId) {
        console.warn(`⚠️  No nodeId found for icon: ${icon.displayName}`)
        continue
      }

      // Generate figma file content
      const iconName = icon.displayName.replace(/[^a-zA-Z0-9]/g, '') // Clean the name
      const figmaContent = generateFigmaContent(webComponent, nodeId, iconName)
      // const figmaContent = generateFigmaContent(webComponent, nodeId)

      // Write .figma.ts file
      const figmaFilePath = path.join(outputDir, `${key}.figma.ts`)
      await fs.writeFile(figmaFilePath, figmaContent)

      console.log(`✅ Generated: ${key}.figma.ts`)
      console.table({
        Component: webComponent,
        'Node ID': nodeId,
        'File Path': figmaFilePath,
      })
    }

    // Final summary
    console.log('\n📊 Generation Summary')
    console.table({
      'Total Icons Processed': Object.keys(icons).length,
      'Output Directory': outputDir,
    })

    console.log('\n✨ Figma code connect generation completed successfully!')
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
