import type { ExecutorContext } from '@nx/devkit'
import { writeFile } from 'node:fs/promises'
import { readFileSync } from 'node:fs'

type DepSpecs = {
  [name: string]: string
}

type PackageJsonPartial = {
  name: string
  version: string
  dependencies?: DepSpecs
  peerDependencies?: DepSpecs
}

type NotUsed = Record<string, never>

export default async function updateDeps(
  _: NotUsed,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  console.info(`Executing "update-deps"...`)

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
      [`${d.pkgJson.name}`]: `^${d.pkgJson.version}`,
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

function getLibPkgJson(libName: string): PackageJsonPartial {
  return JSON.parse(readFileSync(`libs/${libName}/package.json`).toString())
}

function pkgJsonWithUpdatedDeps(
  pkgJson: PackageJsonPartial,
  deps: DepSpecs
): PackageJsonPartial {
  const depSections = ['dependencies', 'peerDependencies']
  const updatedPkgJson = { ...pkgJson }

  // For each dependency section that contains one of the specified dependencies,
  // update the version specifier to the specified version.
  for (const section of depSections) {
    if (!pkgJson[section]) continue
    for (const dep of Object.keys(pkgJson[section])) {
      if (!deps[dep]) continue
      updatedPkgJson[section][dep] = deps[dep]
    }
  }

  return updatedPkgJson
}
