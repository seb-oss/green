import { mkdir, writeFile } from 'fs/promises'
import { generate } from './generator'
import { colors, fonts, shapes, typography } from '../src/tokens'

const generateAndSave = async (folder: string, data: any, prefix: string, filename: string): Promise<void> => {
  const scss = generate(data, prefix)
  await writeFile(`${folder}/${filename}.scss`, scss.join('\n') + '\n', 'utf-8')
}

const run = async () => {
  const folder = './src/scss/tokens'
  await mkdir(folder, { recursive: true })

  await Promise.all([
    generateAndSave(folder, colors, 'color', '_colors'),
    generateAndSave(folder, fonts, 'font', '_fonts'),
    generateAndSave(folder, shapes, 'shape', '_shapes'),
    generateAndSave(folder, typography, 'typography', '_typography'),
  ])
}

run()
