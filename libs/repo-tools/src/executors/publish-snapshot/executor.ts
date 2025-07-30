import { exec, spawn } from 'node:child_process'
import { readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

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

  // Create local .npmrc in libs/<libName>
  const npmrcPath = join('libs', libName, '.npmrc')
  const npmrcContent = `//registry.npmjs.org/:_authToken=${process.env.NODE_AUTH_TOKEN}\nregistry=https://registry.npmjs.org\nalways-auth=true`
  try {
    writeFileSync(npmrcPath, npmrcContent, { mode: 0o600 })
    console.log(`Created .npmrc at ${npmrcPath}`)
    console.log(`Content: ${npmrcContent.trim()}`)
  } catch (error) {
    console.error(`Failed to write .npmrc: ${error.message}`)
    process.exit(1)
  }

  // Log contents of packages.json
  console.info(`Contents of ${libName}/package.json:`)
  console.info(JSON.stringify(pkgJson, null, 2))

  // List contents of publishConfig directory from packages.json config
  const publishConfigDir = pkgJson.publishConfig?.directory || ''
  if (publishConfigDir) {
    const dirPath = join('libs', libName, publishConfigDir)
    console.info(`Contents of publishConfig directory (${dirPath}):`)
    const files = readdirSync(dirPath)
    try {
      if (files.length === 0) {
        console.info('(empty directory)')
      } else {
        files.forEach((file) => console.info(file))
      }
    } catch (error) {
      console.error(`Failed to read publishConfig directory: ${error.message}`)
      return { success: false }
    }
  } else {
    console.info(`No publishConfig directory specified in package.json`)
  }

  // run npm publish
  console.info(`Publishing ${libName} as ${version}...`)
  const npmProcess = spawn(
    'npm',
    [
      'publish',
      '--tag',
      label,
      '--access=public',
      '--no-workspaces',
      '--dry-run',
    ],
    {
      cwd: `libs/${libName}`,
      // env: { ...process.env },
      stdio: ['inherit', 'pipe', 'pipe'],
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

  // Clean up .npmrc after publish
  try {
    unlinkSync(npmrcPath)
    console.log(`Cleaned up .npmrc at ${npmrcPath}`)
  } catch (error) {
    console.error(`Failed to clean up .npmrc: ${error.message}`)
  }

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
function execAsync(arg0: string, arg1: { cwd: string }) {
  throw new Error('Function not implemented.')
}
