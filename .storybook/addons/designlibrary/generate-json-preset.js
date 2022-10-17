// This addon generates a json file similar to stories.json, but tailored for Design Library

const fs = require('fs')

const csfTools = require('@storybook/csf-tools')
const nodeLogger = require('@storybook/node-logger')
const coreCommon = require('@storybook/core-common')

module.exports = {
  // We're not actually modifying the webpack config here,
  // just using this hook to execute code during the build process.
  webpackFinal: async (config, options) => {
    const { default: slash } = await import('slash')
    const { default: path } = await import('path')
    const { globby: globby } = await import('globby')

    nodeLogger.logger.info('=> Generating custom json for Design Library...')

    var directories = {
      configDir: options.configDir,
      workingDir: process.cwd(),
    }
    const storySpecifiers = coreCommon.normalizeStories(
      await options.presets.apply('stories'),
      directories
    )
    const storyPaths = {}

    await Promise.all(
      storySpecifiers.map(async (s) => {
        const fullGlob = slash(
          path.join(directories.workingDir, s.directory, s.files)
        )
        const files = await globby(fullGlob)
        files.forEach((file) => (storyPaths[file] = false))
      })
    )

    const jsonOutput = await Promise.all(
      Object.keys(storyPaths).map(async (absPath) => {
        const csf = (await csfTools.readCsfOrMdx(absPath, {})).parse()
        return {
          id: csf.stories[0].id,
          name: csf.stories[0].name,
          title: csf.meta.title,
          customParams:
            csf._metaAnnotations.parameters?.properties.map((p) => ({
              [p.key.name]: p.value.value,
            })) || [],
        }
      })
    )
    
    const dlJsonPath = path.join(options.outputDir, 'designlibrary.json')
    fs.writeFile(dlJsonPath, JSON.stringify(jsonOutput, null, 2), (error) => {
      if (error) {
        nodeLogger.logger.error(`=> An error has occurred writing Design Library json to ${dlJsonPath}`, error)
        return
      }
      nodeLogger.logger.info(`=> Design Library json written to ${dlJsonPath}`)
    })

    return config
  },
}
