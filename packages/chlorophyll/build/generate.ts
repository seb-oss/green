import { writeFile } from 'fs/promises'
import { generateScss } from './generateScss'
import { colors } from '../src/tokens'

const run = async () => {
  const scssColors = generateScss(colors, 'color')
  await writeFile('./src/scss/_colors.scss', scssColors.join('\n') + '\n', 'utf-8')
}

run()
