/**
 * Input validation for MCP server tools
 */

import { CATEGORIES, FRAMEWORKS, GUIDE_CATEGORIES } from './constants.js'
import { ValidationError } from './errors.js'

import type {
  Category,
  Framework,
  GetComponentDocsInput,
  GetGuideInput,
  GuideCategory,
  ListGuidesInput,
  SearchComponentsInput,
} from './types.js'

/**
 * Validate that a value is one of the allowed values
 * @param value - The value to validate
 * @param allowed - Array of allowed values
 * @param fieldName - Name of the field being validated
 * @throws ValidationError if value is not in allowed array
 */
function validateEnum<T extends string>(
  value: unknown,
  allowed: readonly T[],
  fieldName: string,
): T {
  if (typeof value !== 'string') {
    throw new ValidationError(`${fieldName} must be a string`, fieldName, {
      received: typeof value,
      allowed,
    })
  }

  if (!allowed.includes(value as T)) {
    throw new ValidationError(
      `Invalid ${fieldName}: ${value}. Must be one of: ${allowed.join(', ')}`,
      fieldName,
      { received: value, allowed },
    )
  }

  return value as T
}

/**
 * Validate framework parameter
 * @param framework - Framework value to validate
 * @returns Validated framework
 * @throws ValidationError if framework is invalid
 */
export function validateFramework(framework: unknown): Framework {
  return validateEnum(framework, FRAMEWORKS, 'framework')
}

/**
 * Validate category parameter
 * @param category - Category value to validate
 * @returns Validated category
 * @throws ValidationError if category is invalid
 */
export function validateCategory(category: unknown): Category {
  return validateEnum(category, CATEGORIES, 'category')
}

/**
 * Validate guide category parameter
 * @param category - Guide category value to validate
 * @returns Validated guide category
 * @throws ValidationError if category is invalid
 */
export function validateGuideCategory(category: unknown): GuideCategory {
  return validateEnum(category, GUIDE_CATEGORIES, 'guideCategory')
}

/**
 * Validate string parameter
 * @param value - Value to validate
 * @param fieldName - Name of the field
 * @param required - Whether the field is required
 * @param minLength - Minimum length (optional)
 * @param maxLength - Maximum length (optional)
 * @returns Validated string
 * @throws ValidationError if validation fails
 */
export function validateString(
  value: unknown,
  fieldName: string,
  required: boolean = true,
  minLength?: number,
  maxLength?: number,
): string {
  if (value === undefined || value === null) {
    if (required) {
      throw new ValidationError(`${fieldName} is required`, fieldName)
    }
    return ''
  }

  if (typeof value !== 'string') {
    throw new ValidationError(`${fieldName} must be a string`, fieldName, {
      received: typeof value,
    })
  }

  const trimmed = value.trim()

  if (required && trimmed.length === 0) {
    throw new ValidationError(`${fieldName} cannot be empty`, fieldName)
  }

  if (minLength !== undefined && trimmed.length < minLength) {
    throw new ValidationError(
      `${fieldName} must be at least ${minLength} characters`,
      fieldName,
      { received: trimmed.length, minLength },
    )
  }

  if (maxLength !== undefined && trimmed.length > maxLength) {
    throw new ValidationError(
      `${fieldName} must be at most ${maxLength} characters`,
      fieldName,
      { received: trimmed.length, maxLength },
    )
  }

  return trimmed
}

/**
 * Validate boolean parameter
 * @param value - Value to validate
 * @param fieldName - Name of the field
 * @param defaultValue - Default value if undefined
 * @returns Validated boolean
 * @throws ValidationError if validation fails
 */
export function validateBoolean(
  value: unknown,
  fieldName: string,
  defaultValue: boolean = false,
): boolean {
  if (value === undefined || value === null) {
    return defaultValue
  }

  if (typeof value !== 'boolean') {
    throw new ValidationError(`${fieldName} must be a boolean`, fieldName, {
      received: typeof value,
    })
  }

  return value
}

/**
 * Validate number parameter
 * @param value - Value to validate
 * @param fieldName - Name of the field
 * @param defaultValue - Default value if undefined
 * @param min - Minimum value (optional)
 * @param max - Maximum value (optional)
 * @returns Validated number
 * @throws ValidationError if validation fails
 */
export function validateNumber(
  value: unknown,
  fieldName: string,
  defaultValue?: number,
  min?: number,
  max?: number,
): number {
  if (value === undefined || value === null) {
    if (defaultValue !== undefined) {
      return defaultValue
    }
    throw new ValidationError(`${fieldName} is required`, fieldName)
  }

  if (typeof value !== 'number' || isNaN(value)) {
    throw new ValidationError(`${fieldName} must be a number`, fieldName, {
      received: typeof value,
    })
  }

  if (min !== undefined && value < min) {
    throw new ValidationError(
      `${fieldName} must be at least ${min}`,
      fieldName,
      { received: value, min },
    )
  }

  if (max !== undefined && value > max) {
    throw new ValidationError(
      `${fieldName} must be at most ${max}`,
      fieldName,
      { received: value, max },
    )
  }

  return value
}

/**
 * Sanitize component name to prevent path traversal
 * @param name - Component name to sanitize
 * @returns Sanitized name
 * @throws ValidationError if name contains invalid characters
 */
export function sanitizeComponentName(name: string): string {
  // Remove any path separators or special characters
  const sanitized = name.replace(/[^a-z0-9-]/gi, '')

  if (sanitized.length === 0) {
    throw new ValidationError(
      'Component name contains only invalid characters',
      'componentName',
      { original: name },
    )
  }

  if (sanitized !== name) {
    // Log warning but allow it
    console.warn('[MCP Warning] Component name was sanitized:', {
      original: name,
      sanitized,
    })
  }

  return sanitized
}

/**
 * Validate SearchComponentsInput
 * @param input - Input to validate
 * @returns Validated input
 * @throws ValidationError if validation fails
 */
export function validateSearchComponentsInput(
  input: unknown,
): SearchComponentsInput {
  if (!input || typeof input !== 'object') {
    throw new ValidationError('Invalid input: must be an object', 'input')
  }

  const obj = input as Record<string, unknown>

  return {
    query: validateString(obj.query, 'query', true, 1),
    category: obj.category
      ? validateCategory(obj.category)
      : ('all' as Category),
    splitTerms: validateBoolean(obj.splitTerms, 'splitTerms', true),
    matchAll: validateBoolean(obj.matchAll, 'matchAll', false),
    useRegex: validateBoolean(obj.useRegex, 'useRegex', false),
    maxResults: validateNumber(obj.maxResults, 'maxResults', 20, 1, 100),
  }
}

/**
 * Validate GetComponentDocsInput
 * @param input - Input to validate
 * @returns Validated input
 * @throws ValidationError if validation fails
 */
export function validateGetComponentDocsInput(
  input: unknown,
): GetComponentDocsInput {
  if (!input || typeof input !== 'object') {
    throw new ValidationError('Invalid input: must be an object', 'input')
  }

  const obj = input as Record<string, unknown>

  const componentName = validateString(obj.componentName, 'componentName')

  return {
    componentName: sanitizeComponentName(componentName),
    framework: validateFramework(obj.framework),
    includeGuidelines: validateBoolean(
      obj.includeGuidelines,
      'includeGuidelines',
      true,
    ),
    includeInstructions: validateBoolean(
      obj.includeInstructions,
      'includeInstructions',
      true,
    ),
  }
}

/**
 * Validate ListGuidesInput
 * @param input - Input to validate
 * @returns Validated input
 * @throws ValidationError if validation fails
 */
export function validateListGuidesInput(input: unknown): ListGuidesInput {
  if (!input || typeof input !== 'object') {
    throw new ValidationError('Invalid input: must be an object', 'input')
  }

  const obj = input as Record<string, unknown>

  const result: ListGuidesInput = {}

  if (obj.category !== undefined) {
    result.category = validateGuideCategory(obj.category)
  }

  if (obj.framework !== undefined && obj.framework !== 'all') {
    result.framework = validateEnum(
      obj.framework,
      ['angular', 'react', 'all'] as const,
      'framework',
    )
  }

  return result
}

/**
 * Validate GetGuideInput
 * @param input - Input to validate
 * @returns Validated input
 * @throws ValidationError if validation fails
 */
export function validateGetGuideInput(input: unknown): GetGuideInput {
  if (!input || typeof input !== 'object') {
    throw new ValidationError('Invalid input: must be an object', 'input')
  }

  const obj = input as Record<string, unknown>

  const name = validateString(obj.name, 'name')

  // Sanitize guide name to prevent path traversal
  const sanitized = name.replace(/[^a-z0-9-]/gi, '')
  if (sanitized.length === 0) {
    throw new ValidationError(
      'Guide name contains only invalid characters',
      'name',
      { original: name },
    )
  }

  return {
    name: sanitized,
  }
}
