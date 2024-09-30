// This addon generates a json file similar to stories.json, but tailored for Design Library

const util = require('util')

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
    const { globby } = await import('globby')

    nodeLogger.logger.info('=> Generating custom json for Design Library...')

    var directories = {
      configDir: options.configDir,
      workingDir: process.cwd(),
    }
    const storySpecifiers = coreCommon.normalizeStories(
      await options.presets.apply('stories'),
      directories,
    )
    const storyPaths = {}

    await Promise.all(
      storySpecifiers.map(async (s) => {
        const fullGlob = slash(
          path.join(directories.workingDir, s.directory, s.files),
        )
        const files = await globby(fullGlob)
        files.forEach((file) => (storyPaths[file] = false))
      }),
    )

    try {
      const jsonOutput = await Promise.all(
        Object.keys(storyPaths).map(async (absPath) => {
          const csf = (
            await csfTools.readCsfOrMdx(absPath, { makeTitle: (s) => s })
          ).parse()
          return csf.stories.map((story) => ({
            id: story.id,
            name: story.name,
            title: csf.meta.title,
            customParams: {
              ...getMetaParametersFromCSF(csf),
              ...getStoryParametersFromCSF(csf, story.name),
            },
          }))
        }),
      )

      const jsonOutputFlat = jsonOutput.reduce(
        (cur, acc) => [...acc, ...(Array.isArray(cur) ? [...cur] : [cur])],
        [],
      )

      const dlJsonPath = path.join(options.outputDir, 'designlibrary.json')
      fs.writeFile(
        dlJsonPath,
        JSON.stringify(jsonOutputFlat, null, 2),
        (error) => {
          if (error) {
            nodeLogger.logger.warn(
              `An error has occurred writing Design Library json to ${dlJsonPath}`,
            )
            nodeLogger.logger.warn(error)

            return
          }
          nodeLogger.logger.info(`Design Library json written to ${dlJsonPath}`)
        },
      )
    } catch (error) {
      nodeLogger.logger.warn(
        `An error has occurred while generating json for Design Library`,
      )
      nodeLogger.logger.warn(error)
    }

    return config
  },
}

const getMetaParametersFromCSF = (csf) =>
  csf._metaAnnotations.parameters?.properties.reduce(
    (acc, cur) => ({
      ...acc,
      ...{
        [cur.key.name]:
          cur.value.value || cur.value.elements?.map((e) => e.value),
      },
    }),
    {},
  )

const getStoryParametersFromCSF = (csf, storyName) => {
  const storyAnnotations = csf._storyAnnotations

  let storyParams
  Object.keys(storyAnnotations).forEach((key) => {
    if (storyAnnotations[key].storyName?.value === storyName)
      storyParams = storyAnnotations[key].parameters?.properties
  })

  if (!storyParams || !Array.isArray(storyParams)) return {}

  const parameters = {}
  storyParams.forEach((paramNode) => {
    if (paramNode.type == 'SpreadElement') {
      paramNode.argument.properties.forEach((argNode) => {
        parameters[argNode.key.name] =
          argNode.value.value || argNode.value.elements?.map((e) => e.value)
      })
    }
  })

  return parameters
}
