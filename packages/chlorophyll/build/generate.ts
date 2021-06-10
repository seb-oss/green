import { mkdir, writeFile } from 'fs/promises'
import { generateScss } from './generateScss'
import { colors } from '../src/tokens'

const run = async () => {
  const folder = './src/scss/tokens'
  await mkdir(folder, { recursive: true })

  const scssColors = generateScss(colors, 'color')
  await writeFile(`${folder}/_colors.scss`, scssColors.join('\n') + '\n', 'utf-8')
}

run()
