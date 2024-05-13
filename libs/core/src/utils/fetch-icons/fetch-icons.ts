import axios from 'axios'
import fs from 'fs'
import path from 'path'

const figmaProjectId = 'YOUR_FIGMA_PROJECT_ID'
const figmaAccessKey = 'YOUR_FIGMA_ACCESS_KEY'

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

    // Extract node IDs
    const regXHeader = /node="(?<node>.+?)"/g
    const nodes = Array.from(docResponse.data.matchAll(regXHeader)).map(
      (match) => match.groups?.node,
    )

    // Fetch the images
    const imagesResponse = await axios.get(
      `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${nodes.join(',')}&format=svg`,
      {
        headers: {
          'X-Figma-Token': figmaAccessKey,
        },
      },
    )

    const images = imagesResponse.data.images

    // Fetch and save each SVG
    const fetchPromises = Object.entries(images).map(([node, imageUrl]) => {
      return axios
        .get(imageUrl as string)
        .then((response) => {
          const nodeIdWithHyphen = node.replace(':', '-') // Replace the colon with a hyphen
          const svgData = response.data
          fs.writeFileSync(
            path.join(__dirname, `${nodeIdWithHyphen}.svg`),
            svgData,
          )
        })
        .catch((error) => {
          console.error(`Error fetching Figma SVG`, error)
        })
    })

    await Promise.all(fetchPromises)
  } catch (error) {
    console.error('Error processing Figma SVGS:', error)
  }
}

fetchAndSaveFigmaIcons()
