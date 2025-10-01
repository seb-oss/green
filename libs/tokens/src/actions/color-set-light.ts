import * as fs from 'fs'
import * as path from 'path'
import { resolveReferences } from 'style-dictionary/utils'
import tinycolor from 'tinycolor2'

const CONTENTS = {
  colors: [],
  info: {
    author: 'xcode',
    version: 1,
  },
}

const createColor = (components: {
  red: string
  green: string
  blue: string
  alpha: string
}) => ({
  idiom: 'universal',
  appearances: [
    {
      appearance: 'luminosity',
      value: 'light',
    },
  ],
  color: {
    'color-space': 'srgb',
    components,
  },
})

const createDir = (path) => {
  try {
    fs.mkdirSync(path, { recursive: true })
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}
export default {
  name: 'color-set-light',
  do: (dictionary, { buildPath, ...rest }) => {
    const assetPath = path.join(
      buildPath,
      '/Sources/GdsColours/Resources/Colours.xcassets',
    )

    createDir(assetPath)
    fs.writeFileSync(`${assetPath}/Contents.json`, JSON.stringify(CONTENTS))

    dictionary.allTokens
      .filter((token) => {
        return (
          !token.path.includes('ref') &&
          token.path.includes('color') &&
          token.version !== '2016'
        )
      })
      .forEach((token) => {
        const colorsetPath = `${assetPath}/${token.name.replace('sysColor', '')}.colorset`
        const contentsJsonPath = path.join(colorsetPath, 'Contents.json')

        const originalValue = resolveReferences(
          token.original['$value'],
          dictionary.tokens,
        ).original['$value']

        const rgb = tinycolor(originalValue).toRgb()

        const rgbObj = {
          red: (rgb.r / 255).toFixed(3),
          green: (rgb.g / 255).toFixed(3),
          blue: (rgb.b / 255).toFixed(3),
          alpha: rgb.a !== undefined ? rgb.a.toFixed(3) : '1.000',
        }

        if (token.alpha) {
          rgbObj.alpha = token.alpha.toFixed(3)
        }

        if (!fs.existsSync(colorsetPath)) {
          createDir(colorsetPath)
        }

        if (!fs.existsSync(contentsJsonPath)) {
          fs.writeFileSync(contentsJsonPath, JSON.stringify(CONTENTS, null, 2))
        }

        if (fs.existsSync(contentsJsonPath)) {
          const contentsJson = fs.readFileSync(contentsJsonPath, 'utf8')
          const contents = JSON.parse(contentsJson)

          contents.colors.push(createColor(rgbObj))

          fs.writeFileSync(contentsJsonPath, JSON.stringify(contents, null, 2))
        }
      })
  },
  undo: function (dictionary, platform) {
    const resourcesPath = path.join(buildPath, '/Sources/GdsColours/Resources')
    if (fs.existsSync(resourcesPath)) {
      fs.rmSync(resourcesPath, { recursive: true, force: true })
    }
  },
}
