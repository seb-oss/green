import { readFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'

import type { ExecutorContext } from '@nx/devkit'

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
  context: ExecutorContext,
): Promise<{ success: boolean }> {
  console.info(`Executing "version-as-snapshot"...`)

  const libName = context.projectName || ''

  // Generate updated package.json
  const updatedPkgJson = getLibPkgJson(libName)
  updatedPkgJson.version = `${updatedPkgJson.version}-SNAPSHOT`

  // Write updated package.json to file
  try {
    await writeFile(
      `libs/${libName}/package.json`,
      JSON.stringify(updatedPkgJson, null, 2) + '\n',
    )
    return { success: true }
  } catch {
    return { success: false }
  }
}

function getLibPkgJson(libName: string): PackageJsonPartial {
  return JSON.parse(readFileSync(`libs/${libName}/package.json`).toString())
}
