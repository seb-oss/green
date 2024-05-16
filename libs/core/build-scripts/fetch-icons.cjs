const axios = require('axios')
const fs = require('fs')
const path = require('path')

const figmaAccessKey = process.env.FIGMA_ACCESS_KEY
const figmaProjectId = process.env.FIGMA_PROJECT_ID
const figmaRegularNodeID = process.env.FIGMA_REGULAR_NODE_ID
const figmaSolidNodeID = process.env.FIGMA_SOLID_NODE_ID
const figmaSaveTo = path.resolve(__dirname, '../src/components/icon/assets')

console.log('Figma access key:', figmaRegularNodeID)

async function fetchAndSaveFigmaIcons() {
  try {
    // Fetch the document
    const docResponse = await axios.get(
      `https://api.figma.com/v1/files/${figmaProjectId}`,
      {
        headers: {
          'X-Figma-Token': figmaAccessKey,
        },
      },
    )

    console.log('Figma document:', docResponse.data.document.name)
    console.log('Figma document children:', docResponse.data.document.children)

    // Traverse the document to find the specific node and its children
    const nodes = []
    const traverse = (node) => {
      if (node.id === figmaRegularNodeID) {
        console.log('Found node:', node.name)
        if (node.children) {
          node.children.forEach((child) =>
            nodes.push({ id: child.id, name: child.name }),
          )
          console.log(
            'Children:',
            node.children.map((child) => child.name),
          )
        }
      } else if (node.children) {
        node.children.forEach(traverse)
      }
    }
    traverse(docResponse.data.document)

    // Split nodes into chunks of 60
    const chunks = []
    while (nodes.length) {
      chunks.push(nodes.splice(0, 60))
    }

    // Fetch the images for each node
    for (const chunk of chunks) {
      const fetchPromises = chunk.map(async (node) => {
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
          axios
            .get(imageUrl)
            .then((response) => {
              let nodeName = node.name.split(',')[0]
              let fileName = `${nodeName}.svg`
              let counter = 1
              while (fs.existsSync(path.join(figmaSaveTo, fileName))) {
                // If a file with the same name exists, append a number
                fileName = `${nodeName}-${counter}.svg`
                counter++
              }
              const svgData = response.data
              fs.writeFileSync(path.join(figmaSaveTo, fileName), svgData)
              console.log(`Fetched Figma SVG for ${nodeName}`)
            })
            .catch((error) => {
              console.error(`Error fetching Figma SVG`, error)
            })
        }
      })

      await Promise.all(fetchPromises)
    }
  } catch (error) {
    console.error('Error processing Figma SVGS:', error)
  }
}

fetchAndSaveFigmaIcons()
