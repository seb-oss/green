import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  name: 'copy-android-assets',
  do: function (dictionary, config) {
    console.log('Copying android assets')

    const sourceDir = path.join(__dirname, '../../../fonts/fonts/SEBSansSerif')
    const destDir = path.join(config.buildPath, 'fonts')

    fs.ensureDirSync(destDir)
    fs.readdirSync(sourceDir)
      .filter((file) => file.endsWith('.ttf'))
      .forEach((file) => {
        fs.copySync(path.join(sourceDir, file), path.join(destDir, file))
      })
  },
  undo: function (config) {
    console.log('Cleaning assets directory')
    fs.rmSync(path.join(config.buildPath, 'fonts'), {
      recursive: true,
      force: true,
    })
  },
}
