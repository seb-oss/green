import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  name: 'copy-ios-assets',
  do: function (dictionary, config) {
    console.log('Copying iOS assets')

    fs.copySync(
      path.join(__dirname, '../assets/ios'),
      path.join(config.buildPath, 'Sources', 'GdsTypography'),
    )

    // Copy only .ttf files from the source to the destination
    const srcDir = path.join(__dirname, '../../../fonts/fonts/SEBSansSerif')
    const destDir = path.join(
      config.buildPath,
      'Sources',
      'GdsTypography',
      'Resources',
    )
    fs.ensureDirSync(destDir)
    fs.readdirSync(srcDir)
      .filter((file) => file.endsWith('.ttf'))
      .forEach((file) => {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file))
      })
  },
  undo: function (dictionary, config) {
    console.log('Cleaning assets directory')
    fs.rmSync(config.buildPath, { recursive: true, force: true })
  },
}
