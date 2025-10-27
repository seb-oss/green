#!/usr/bin/env node

/*
 Cross-platform replacement script for SCSS @use paths.

 - Scans a target directory (default: dist/libs/charts/scss)
 - For each .scss file, replaces occurrences of:
		 "@use '@sebgroup/chlorophyll/src/scss"
	 with:
		 "@use '@sebgroup/chlorophyll/scss"
 - Writes files only when changes are detected.

 Usage:
	 node libs/charts/build-scripts/replace-use-path.js [targetDir]

 Exit codes:
	 0 on success (even if no files changed), 1 on unexpected errors.
*/

const fs = require('fs')
const path = require('path')

const rootCwd = process.cwd()
const targetDir = path.resolve(
  rootCwd,
  process.argv[2] || 'dist/libs/charts/scss',
)

const FROM = "@use '@sebgroup/chlorophyll/src/scss"
const TO = "@use '@sebgroup/chlorophyll/scss"

async function* walk(dir) {
  let entries
  try {
    entries = await fs.promises.readdir(dir, { withFileTypes: true })
  } catch (err) {
    // Directory may not exist yet; surface a friendly message and end.
    if (err.code === 'ENOENT') {
      return
    }
    throw err
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(fullPath)
    } else if (entry.isFile() && fullPath.endsWith('.scss')) {
      yield fullPath
    }
  }
}

async function replaceInFile(filePath) {
  const original = await fs.promises.readFile(filePath, 'utf8')
  if (!original.includes(FROM)) return { changed: false }

  // Use split/join for Node versions without String.prototype.replaceAll
  const updated = original.split(FROM).join(TO)
  if (updated !== original) {
    await fs.promises.writeFile(filePath, updated, 'utf8')
    return { changed: true }
  }
  return { changed: false }
}

async function main() {
  let scanned = 0
  let changed = 0

  // Quick existence check to provide a clean message
  if (!fs.existsSync(targetDir)) {
    console.log(`[replace-use-path] Target directory not found: ${targetDir}`)
    console.log(
      '[replace-use-path] Nothing to do (this is OK if build has not produced SCSS yet).',
    )
    return 0
  }

  try {
    for await (const file of walk(targetDir)) {
      scanned++
      const result = await replaceInFile(file)
      if (result.changed) changed++
    }
  } catch (err) {
    console.error('[replace-use-path] Error while processing files:', err)
    return 1
  }

  console.log(
    `[replace-use-path] Scanned ${scanned} file(s). Updated ${changed} file(s).`,
  )
  return 0
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    console.error('[replace-use-path] Fatal error:', err)
    process.exit(1)
  })
