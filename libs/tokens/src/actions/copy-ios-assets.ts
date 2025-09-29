import path from 'path'
import fs from 'fs-extra'

export default {
  name: 'copy-ios-assets',
  do: function (dictionary, config) {
    console.log('Copying assets')

    fs.copySync(
      path.join(process.cwd(), 'libs/tokens/src/assets/ios'),
      path.join(config.buildPath, 'Sources', 'GdsTypography'),
    )
    const Resources = 'Resources'
    fs.copySync(
      path.join(process.cwd(), 'libs/tokens/src/assets/fonts'),
      path.join(config.buildPath, 'Sources', 'GdsTypography', 'Resources'),
    )
  },
  undo: function (dictionary, config) {
    console.log('Cleaning assets directory')
    fs.rmSync(config.buildPath, { recursive: true, force: true })
  },
}
