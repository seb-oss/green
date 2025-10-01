import path from 'path'
import fs from 'fs-extra'

export default {
  name: 'copy-android-assets',
  do: function (dictionary, config) {
    console.log('Copying assets')

    const sourceDir = path.join(process.cwd(), 'libs/fonts/fonts/SEBSansSerif')
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
