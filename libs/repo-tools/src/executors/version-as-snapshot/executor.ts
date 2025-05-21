import { readFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'

import type { ExecutorContext } from '@nx/devkit'

interface PackageJsonPartial {
  version: string
}

interface ExecutorOptions {
  label: string
}

export default async function versionAsSnapshot(
  options: ExecutorOptions,
  context: ExecutorContext,
): Promise<{ success: boolean }> {
  console.info(`Executing "version-as-snapshot"...`)

  const libName = context.projectName || ''

  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '')
  const label = options.label || 'snapshot'

  // Generate updated package.json
  const updatedPkgJson = getLibPkgJson(libName)
  updatedPkgJson.version = `${updatedPkgJson.version}-${label}.${timestamp}`

  console.info(`Versioned ${libName} as ${updatedPkgJson.version}`)

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
