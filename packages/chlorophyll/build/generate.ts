import { mkdir, writeFile } from 'fs/promises'
import { generate } from './generator'
import { colors, fonts, shapes, themes, typography } from '../src/tokens'

const generateAndSave = async (folder: string, data: any, prefix: string, filename: string): Promise<string> => {
  const scss = generate(data, prefix)
  await writeFile(`${folder}/_${filename}.scss`, scss.join('\n') + '\n', 'utf-8')
  return filename
}

const generateAndSaveIndex = async (folder: string, ...files: string[]): Promise<void> => {
  const forwards = files.map((file) => `@forward '${file}';`)
  await writeFile(`${folder}/_index.scss`, forwards.join('\n') + '\n', 'utf-8')
}

const run = async () => {
  const folder = './src/scss/tokens'
  await mkdir(folder, { recursive: true })

  const files = await Promise.all([
    generateAndSave(folder, colors, 'color', 'colors'),
    generateAndSave(folder, fonts, 'font', 'fonts'),
    generateAndSave(folder, shapes, 'shape', 'shapes'),
    generateAndSave(folder, themes, 'theme', 'themes'),
    generateAndSave(folder, typography, 'typography', 'typography'),
  ])
  await generateAndSaveIndex(folder, ...files)
}

run()
