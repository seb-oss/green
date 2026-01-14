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
 * Removes a prefix from a string (commonly used to remove 'gds-' from tag names)
 */
export function removePrefix(str: string, prefix: string): string {
  if (!str || !prefix) return str
  return str.startsWith(prefix) ? str.slice(prefix.length) : str
}

/**
 * Converts an event name to React event handler convention
 * Converts kebab-case to camelCase and adds 'on' prefix
 *
 * @example
 * reactEventHandlerName('gds-close') // => 'onGdsClose'
 */
export function reactEventHandlerName(eventName: string): string {
  const camel = kebabToCamelCase(eventName)
  return 'on' + camel.charAt(0).toUpperCase() + camel.slice(1)
}

/**
 * Angular event name conversion (kebab-case -> camelCase)
 */
export function angularEventName(eventName: string): string {
  return kebabToCamelCase(eventName)
}

export default {
  kebabToCamelCase,
  pascalCase: toPascalCase,
  camelToKebabCase,
  removePrefix,
  reactEventHandlerName,
  angularEventName,
}
