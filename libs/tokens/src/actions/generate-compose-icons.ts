import path from 'path'
import fs from 'fs-extra'
import { spawnSync } from 'child_process'
import { fileURLToPath } from 'url'
import { generateIconManifest } from './generate-icon-manifest.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const OUT_DIR = path.join(__dirname, '../../../../dist/libs/tokens/2023/android/icons')
const S2C_PATH = path.join(__dirname, '../../../../tools/s2c')
const SOLID_SRC = path.join(__dirname, '../../../../libs/core/src/components/icon/assets/solid/')
const REGULAR_SRC = path.join(__dirname, '../../../../libs/core/src/components/icon/assets/regular/')

async function runS2C() {
  // solid
  spawnSync(S2C_PATH, [
    '--optimize', 'false',
    '--minified',
    '-o', path.join(OUT_DIR, 'solid'),
    '-t', 'se.seb.gds.theme.GdsTheme',
    '-p', 'se.seb.gds.icons.solid',
    SOLID_SRC,
  ], { stdio: 'inherit' })
  // regular
  spawnSync(S2C_PATH, [
    '--optimize', 'false',
    '--minified',
    '-o', path.join(OUT_DIR, 'regular'),
    '-t', 'se.seb.gds.theme.GdsTheme',
    '-p', 'se.seb.gds.icons.regular',
    REGULAR_SRC,
  ], { stdio: 'inherit' })
}

async function fixKotlinColors() {
  // Recursively replace 0xCURRENTCOLOR with 0xFF000000 in all .kt files
  const replaceInFile = async (dir: string) => {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await replaceInFile(fullPath)
      } else if (entry.isFile() && entry.name.endsWith('.kt')) {
        let content = await fs.readFile(fullPath, 'utf8')
        const newContent = content.replace(/0xCURRENTCOLOR/g, '0xFF000000')
        if (content !== newContent) {
          await fs.writeFile(fullPath, newContent)
        }
      }
    }
  }
  await replaceInFile(OUT_DIR)
}

export default {
  name: 'generate-compose-icons',
  do: async function () {
    console.log('Running s2c conversion...')
    await runS2C()
    console.log('Fixing generated Kotlin files...')
    await fixKotlinColors()
    console.log('Generating icon manifest...')
    await generateIconManifest({
      iconRootDir: OUT_DIR,
      manifestPackage: 'se.seb.gds.icons',
      manifestFilename: 'GdsIcons.kt',
    })
    console.log('✅ Compose icons generation complete.')
  },
  undo: async function () {
    // Optionally remove generated icons and manifest
    if (await fs.pathExists(OUT_DIR)) {
      await fs.remove(OUT_DIR)
      console.log('Cleaned generated icons directory.')
    }
  },
}
