import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit'
import * as path from 'path'
import { CoreComponentGeneratorGeneratorSchema } from './schema'

function uppercase(val: string) {
  return val.toUpperCase()
}

function capitalize(val: string) {
  return val.charAt(0).toUpperCase() + val.slice(1)
}

function splitCapitalized(val: string) {
  return val
    .split('-')
    .map((word) => capitalize(word))
    .join(' ')
}

function camelCase(val: string) {
  return val
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word
      }
      return capitalize(word)
    })
    .join('')
}

function pascalCase(val: string) {
  return val
    .split('-')
    .map((word) => capitalize(word))
    .join('')
}

export async function coreComponentGeneratorGenerator(
  tree: Tree,
  options: CoreComponentGeneratorGeneratorSchema
) {
  const filePath = `libs/core/src/${options.sub_path}/${options.name}/`
  const templatePath = path.join(__dirname, `templates/${options.sub_path}`)

  generateFiles(tree, templatePath, filePath, {
    uppercase,
    capitalize,
    camelCase,
    splitCapitalized,
    pascalCase,
    ...options,
  })

  await formatFiles(tree)
}

export default coreComponentGeneratorGenerator
