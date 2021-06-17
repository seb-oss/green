import { mkdir, writeFile } from 'fs/promises'
import { generate } from './generator'
import { colors, fonts, shapes, themes, typography } from '../src/tokens'

type FilaAndAs = [fileName: string, asName: string]

const generateAndSave = async (folder: string, data: any, asName: string, fileName: string): Promise<FilaAndAs> => {
  const scss = generate(data)
  await writeFile(`${folder}/_${fileName}.scss`, scss.join('\n') + '\n', 'utf-8')
  return [fileName, asName]
}

const generateAndSaveIndex = async (folder: string, files: FilaAndAs[]): Promise<void> => {
  const forwards = files.map(([fileName, asName]) => `@forward '${fileName}' as ${asName}-*;`)
  await writeFile(`${folder}/_index.scss`, forwards.join('\n') + '\n', 'utf-8')
}

const run = async () => {
  console.log('Generate is currently suspended. Please come back later!')
  /*
  const folder = './src/scss/tokens'
  await mkdir(folder, { recursive: true })

  const files = await Promise.all([
    generateAndSave(folder, colors, 'color', 'colors'),
    generateAndSave(folder, fonts, 'font', 'fonts'),
    generateAndSave(folder, shapes, 'shape', 'shapes'),
    generateAndSave(folder, themes, 'theme', 'themes'),
    generateAndSave(folder, typography, 'typography', 'typography'),
  ])
  await generateAndSaveIndex(folder, files)
  */
}

run()
