import { writeFile } from 'fs/promises'
import { generateScss } from './generateScss'
import { colors } from '../src/tokens'

const run = async () => {
  const scssColors = generateScss(colors, 'color')
  await writeFile('./src/style/colors.scss', scssColors.join('\n') + '\n', 'utf-8')
}

run()
