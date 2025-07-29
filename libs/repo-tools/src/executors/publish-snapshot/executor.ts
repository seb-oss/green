import { exec, spawn } from 'node:child_process'
import { readFileSync } from 'node:fs'

import type { ExecutorContext } from '@nx/devkit'

interface PackageJsonPartial {
  name: string
  version: string
}

interface ExecutorOptions {
  label: string
}

export default async function publishSnapshot(
  options: ExecutorOptions,
  context: ExecutorContext,
): Promise<{ success: boolean }> {
  console.info(`Executing "publish-snapshot"...`)

  const libName = context.projectName || ''
  const label = options.label || 'snapshot'

  // Assert that the version is a snapshot with matching label, according to this format `x.x.x-<label>.<timestamp>`
  const pkgJson = getLibPkgJson(libName)
  const version = pkgJson.version
  const versionParts = version.split('-')
  if (versionParts.length !== 2) {
    console.error(`Version ${version} is not a snapshot version`)
    return { success: false }
  }
  const [snapshotLabel, _] = versionParts[1].split('.')
  if (snapshotLabel !== label) {
    console.error(`Snapshot version ${version} does not match label ${label}`)
    return { success: false }
  }

  if (!process.env.NPM_TOKEN) {
    console.error('Error: NPM_TOKEN environment variable is not set.')
    process.exit(1)
  }

  // run npm publish
  console.info(`Publishing ${libName} as ${version}...`)
  const npmProcess = spawn(
    'npm',
    ['publish', '--tag', label, '--access=public'],
    {
      cwd: `libs/${libName}`,
      env: { ...process.env, NPM_TOKEN: process.env.NPM_TOKEN },
    },
  )
  npmProcess.stdout.on('data', (data) => {
    console.log(data.toString())
  })
  npmProcess.stderr.on('data', (data) => {
    console.error(data.toString())
  })

  const exitCode = await new Promise((resolve, reject) => {
    npmProcess.on('close', resolve)
  })

  if (exitCode === 0) {
    console.info(`Published ${libName} as ${version}`)
    exec(
      `echo "SNAPSHOT_VERSION_${libName.toUpperCase()}=${version}" >> $GITHUB_OUTPUT`,
    )
    return { success: true }
  } else {
    console.error(`Failed to publish ${libName} as ${version}`)
    return { success: false }
  }
}

function getLibPkgJson(libName: string): PackageJsonPartial {
  return JSON.parse(readFileSync(`libs/${libName}/package.json`).toString())
}
