import type { ExecutorContext } from '@nrwl/devkit'
import { writeFile } from 'node:fs/promises'
import { readFileSync } from 'node:fs'

type DepSpecs = {
  [name: string]: string
}

export interface UpdateDepsExecutorOptions {}

export default async function updateDeps(
  _: UpdateDepsExecutorOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  console.info(`Executing "update-deps"...`)

  const npmScope = context.workspace?.npmScope
  const libName = context.projectName || ''

  // Use the project graph to get the list of dependencies
  const graph_deps =
    context.projectGraph?.dependencies[libName].filter(
      (d) => !d.target.startsWith('npm:')
    ) || []

  // Construct npm dependency specifiers for each dependency
  const latest_dep_versions = graph_deps
    .map((d) => ({ ...d, pkgJson: getLibPkgJson(d.target) }))
    .map((d) => ({
      [`@${npmScope}/${d.pkgJson.name}`]: `^${d.pkgJson.version}`,
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})

  // Generate updated package.json
  const updatedPkgJson = pkgJsonWithUpdatedDeps(
    getLibPkgJson(libName),
    latest_dep_versions
  )

  // Write updated package.json to file
  try {
    await writeFile(
      `libs/${libName}/package.json`,
      JSON.stringify(updatedPkgJson, null, 2) + '\n'
    )
    return { success: true }
  } catch {
    return { success: false }
  }
}

function getLibPkgJson(libName: string): any {
  return JSON.parse(readFileSync(`libs/${libName}/package.json`).toString())
}

function pkgJsonWithUpdatedDeps(pkgJson: any, deps: DepSpecs): any {
  return {
    ...pkgJson,
    dependencies: {
      ...pkgJson.dependencies,
      ...deps,
    },
  }
}
