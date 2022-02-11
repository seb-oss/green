import { ExecutorContext } from '@nrwl/devkit'
const fs = require('fs')

export interface MultipleExecutorOptions {
  outputPath: string
  packageJson: string
}

const updateDeps = (
  pkg,
  packages,
  type: 'dependencies' | 'peerDependencies' = 'dependencies'
) => {
  const deps = Object.entries(pkg[type] || {})
  return {
    ...pkg,
    [type]: {
      ...deps.reduce(
        (previous, current) => ({
          ...previous,
          [current[0]]: packages[current[0]]
            ? `^${packages[current[0]]}`
            : current[1],
        }),
        {}
      ),
    },
  }
}

export default async function multipleExecutor(
  options: MultipleExecutorOptions,
  context: ExecutorContext
) {
  console.info(`Executing "update-dependencies"...`)
  console.info(`Options: ${JSON.stringify(options, null, 2)}`)
  const result = await Promise.race([
    await new Promise((resolve) => {
      // get workspace config
      const workspace = JSON.parse(fs.readFileSync(`workspace.json`))

      // get package json for project
      const pkg = JSON.parse(
        fs.readFileSync(`libs/${context.projectName}/package.json`)
      )
      console.log(`existing package.json for ${context.projectName}`, pkg)

      // get libs based on path
      const libs = Object.values<string>(workspace.projects).filter((path) =>
        /^libs\/.*/.test(path)
      )

      // get current version of each lib from package.json
      const packages = libs.reduce((previous, current) => {
        const pkg = JSON.parse(fs.readFileSync(`${current}/package.json`))
        return {
          ...previous,
          [pkg.name]: pkg.version,
        }
      }, {})

      // placeholder for updated package.json for project
      let updatedPkg = {
        ...pkg,
      }

      // update peer dependencies if needed
      if (pkg.peerDependencies) {
        updatedPkg = updateDeps(updatedPkg, packages, 'peerDependencies')
      }

      // update dependencies if needed
      if (pkg.dependencies) {
        updatedPkg = updateDeps(updatedPkg, packages)
      }
      console.log(`updated package.json for ${context.projectName}`, updatedPkg)
      fs.writeFile(
        `libs/${context.projectName}/package.json`,
        JSON.stringify(updatedPkg, null, 4),
        resolve
      )
      console.log(`libs/${context.projectName}/package.json has been updated!`)
    })
      .catch((_) => [{ success: false }])
      .then((_) => [{ success: true }]),
  ])

  for await (const res of result) {
    if (!res.success) return res
  }

  return { success: true }
}
