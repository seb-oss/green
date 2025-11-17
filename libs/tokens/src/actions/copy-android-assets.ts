import path from 'path'
import fs from 'fs-extra'

export default {
  name: 'copy-android-assets',
  do: function (dictionary: unknown, config: { buildPath: string }) {
    console.log('Copying android assets')

    const sourceDir = path.resolve('./libs/fonts/fonts/SEBSansSerif')
    const destDir = path.join(config.buildPath, 'fonts')

    fs.ensureDirSync(destDir)
    const toSnakeCase = (str: string) =>
      str
        // space or hyphen to underscore
        .replace(/[\s-]+/g, '_')
        // camelCase to snake_case
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        // capitalized to snake_case
        .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
        // non-word to underscore
        .replace(/[^A-Za-z0-9_]+/g, '_')
        // collapse multiple underscores
        .replace(/_+/g, '_')
        // trim leading/trailing underscores
        .replace(/^_+|_+$/g, '')
        .toLowerCase()

    fs.readdirSync(sourceDir)
      .filter((file) => file.endsWith('.ttf'))
      .forEach((file) => {
        const parsed = path.parse(file)
        const snakeName = `${toSnakeCase(parsed.name)}${parsed.ext.toLowerCase()}`
        fs.copySync(path.join(sourceDir, file), path.join(destDir, snakeName))
      })
  },
  undo: function (config: { buildPath: string }) {
    console.log('Cleaning assets directory')
    fs.rmSync(path.join(config.buildPath, 'fonts'), {
      recursive: true,
      force: true,
    })
  },
}
