import * as path from 'path'
import { formatFiles, generateFiles, Tree } from '@nx/devkit'

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
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return letter.toUpperCase()
    })
    .replace(/\s+/g, '')
}

function toBritishTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase(),
    )
    .join(' ')
}

function toKebabCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-')
}

export async function coreComponentGenerator(
  tree: Tree,
  options: CoreComponentGeneratorSchema,
) {
  const componentRoot =
    `libs/core/src/` + options.componentType + 's/' + toKebabCase(options.name)

  if (tree.exists(componentRoot)) {
    throw new Error(
      `A component with the name "${options.name}" already exists at "${componentRoot}". Please choose a different name.`,
    )
  }

  generateFiles(tree, path.join(__dirname, 'files'), componentRoot, {
    ...options,
    toCamelCase,
    toPascalCase,
    toKebabCase,
    toBritishTitleCase,
    fileName: toKebabCase(options.name),
  })
  await formatFiles(tree)
}

export default coreComponentGenerator
