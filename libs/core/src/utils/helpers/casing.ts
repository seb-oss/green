/**
 * Small casing utilities used across the core library.
 */

/**
 * Converts a kebab-case string to camelCase
 *
 * @example
 * kebabToCamelCase('gds-close') // => 'gdsClose'
 * kebabToCamelCase('my-component-name') // => 'myComponentName'
 */
export function kebabToCamelCase(str: string): string {
  if (!str) return str
  return str.replace(/-([a-zA-Z0-9])/g, (_, letter) => letter.toUpperCase())
}

/**
 * Converts a kebab-case or camelCase string to PascalCase
 *
 * @example
 * pascalCase('gds-button') // => 'GdsButton'
 * pascalCase('gdsButton') // => 'GdsButton'
 */
export function toPascalCase(str: string): string {
  if (!str) return str
  // If kebab-case, transform first
  const normalized = str.includes('-')
    ? str
        .split('-')
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join('')
    : str.charAt(0).toUpperCase() + str.slice(1)
  return normalized
}

/**
 * Converts a camelCase string to kebab-case
 *
 * @example
 * camelToKebabCase('gdsClose') // => 'gds-close'
 * camelToKebabCase('myComponentName') // => 'my-component-name'
 */
export function camelToKebabCase(str: string): string {
  if (!str) return str
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Capitalizes the first letter of a string
 *
 * @example
 * capitalize('hello') // => 'Hello'
 * capitalize('myString') // => 'MyString'
 */
export function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default {
  kebabToCamelCase,
  pascalCase: toPascalCase,
  camelToKebabCase,
  capitalize,
}
