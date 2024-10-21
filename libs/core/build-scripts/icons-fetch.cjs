const axios = require('axios')
const fs = require('fs').promises
const path = require('path')

const figmaAccessKey = process.env.FIGMA_ACCESS_KEY
const figmaProjectId = process.env.FIGMA_PROJECT_ID
const figmaRegularNodeID = process.env.FIGMA_REGULAR_NODE_ID
const figmaSolidNodeID = process.env.FIGMA_SOLID_NODE_ID
const figmaSaveToRegular = path.resolve(
  __dirname,
  '../src/components/icon/assets/regular',
)
const figmaSaveToSolid = path.resolve(
  __dirname,
  '../src/components/icon/assets/solid',
)

console.log('Starting script...')

async function fetchAndSaveFigmaIcons(nodeId, savePath) {
  console.log(`Fetching and saving Figma icons for node ${nodeId}...`)
  try {
    console.log('Sending request to Figma API...')
    const docResponse = await axios.get(
      `https://api.figma.com/v1/files/${figmaProjectId}`,
      {
        headers: {
          'X-Figma-Token': figmaAccessKey,
        },
      },
    )
    console.log('Received response from Figma API.')

    const nodes = []
    const traverse = (node) => {
      if (node.id === nodeId) {
        console.log('Found node:', node.name)
        if (node.children) {
          node.children.forEach((child) =>
            nodes.push({ id: child.id, name: child.name }),
          )
        }
      } else if (node.children) {
        node.children.forEach(traverse)
      }
    }
    console.log('Traversing document...')
    traverse(docResponse.data.document)

    const batchSize = 40
    for (let i = 0; i < nodes.length; i += batchSize) {
      const batch = nodes.slice(i, i + batchSize)
      const fetchPromises = batch.map(async (node) => {
        console.log(`Fetching image for node ${node.id}...`)
        const imagesResponse = await axios.get(
          `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${node.id}&format=svg`,
          {
            headers: {
              'X-Figma-Token': figmaAccessKey,
            },
          },
        )

        const images = imagesResponse.data.images
        const imageUrl = images[node.id]
        if (imageUrl) {
          console.log(`Fetching SVG from ${imageUrl}...`)
          const response = await axios.get(imageUrl)
          let nodeName = node.name.split(',')[0]
          let fileName = `${nodeName}.svg`
          const svg = response.data
          console.log(`Writing SVG to ${path.join(savePath, fileName)}...`)
          await fs.writeFile(path.join(savePath, fileName), svg)
          console.log(`Fetched Figma SVG for ${nodeName}`)
        }
      })

      console.log('Waiting for all fetch promises to resolve...')
      await Promise.all(fetchPromises)
      console.log('All fetch promises resolved.')

      if (i + batchSize < nodes.length) {
        console.log('Waiting for 1 minute before fetching the next batch...')
        await new Promise((resolve) => setTimeout(resolve, 60 * 1000)) // Wait for 1 minute
      }
    }
  } catch (error) {
    console.error('Error processing Figma SVGS:', error)
  }
}

async function main() {
  console.log('Fetching regular icons...')
  await fetchAndSaveFigmaIcons(figmaRegularNodeID, figmaSaveToRegular)
  console.log('Fetching solid icons...')
  await fetchAndSaveFigmaIcons(figmaSolidNodeID, figmaSaveToSolid)
  console.log('Script finished.')
}

main().catch((error) => {
  console.error('Error in main:', error)
})
