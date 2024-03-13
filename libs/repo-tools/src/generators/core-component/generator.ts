import { formatFiles, generateFiles, Tree } from '@nx/devkit'
import * as path from 'path'
import { CoreComponentGeneratorSchema } from './schema'

function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    })
    .replace(/\s+/g, '')
}

function toPascalCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return letter.toUpperCase()
    })
    .replace(/\s+/g, '')
}

function toKebabCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-')
}

export async function coreComponentGenerator(
  tree: Tree,
  options: CoreComponentGeneratorSchema
) {
  const componentRoot =
    `libs/core/src/` + options.componentType + 's/' + toKebabCase(options.name)
  generateFiles(tree, path.join(__dirname, 'files'), componentRoot, {
    ...options,
    toCamelCase,
    toPascalCase,
    toKebabCase,
    fileName: toKebabCase(options.name),
  })
  await formatFiles(tree)
}

export default coreComponentGenerator
