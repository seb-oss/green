import { StyleExpressionPropertyOptions } from '../decorators/style-expression-property'

/**
 * This type expresses allowed color levels in the GDS color system.
 */
export type GdsColorLevel = '1' | '2' | '3'

/**
 * Parse color token value to a css var expression. If slash is present,
 * the value after the slash vill be used for transparency.
 *
 * @param value The color token name
 * @param context The context, such as content, background, border, etc.
 * @param level The level of the color. Can be 1, 2 or 3
 */
export function parseColorValue(
  value: string,
  context: string,
  level: GdsColorLevel,
): string {
  if (
    value === 'transparent' ||
    value === 'currentColor' ||
    value === 'inherit'
  ) {
    return value
  }
  const [colorName, transparency] = value.split('/')

  let colorVar: string

  if (level && context === 'background') {
    colorVar = `var(--gds-sys-color-l${level}-${colorName})`
  } else {
    colorVar = `var(--gds-sys-color-${context}-${colorName})`
  }

  return transparency
    ? `color-mix(in srgb, ${colorVar} ${parseFloat(transparency) * 100}%, transparent 0%)`
    : colorVar
}

/**
 * Create options for style expression properties that expect color tokens.
 *
 * @param context The context, such as content, background, border, etc.
 */
export function forColorTokens(
  context: string,
): StyleExpressionPropertyOptions {
  return {
    valueTemplate: function (this: { level: GdsColorLevel }, v: string) {
      return parseColorValue(v, context, this.level)
    },
  }
}

/**
 * Create options for style expression properties that expect space tokens.
 */
export const forSpaceTokens: StyleExpressionPropertyOptions = {
  valueTemplate: (value: string) => `var(--gds-sys-space-${value}, 0)`,
}

/**
 * Create options for style expression properties that expect space tokens.
 */
export const forSpaceTokensAndCustomValues: StyleExpressionPropertyOptions = {
  valueTemplate: (value: string) =>
    `var(--gds-sys-space-${sanitizeVariableName(value)}, ${value})`,
}

/**
 * Create options for style expression properties that expect space tokens.
 * This version supports negative values.
 */
export const forSpaceTokensSupportingNegative: StyleExpressionPropertyOptions =
  {
    valueTemplate: (v) => {
      const sign = v.startsWith('-') ? 'neg' : 'pos'
      const val =
        sign == 'pos'
          ? `var(--gds-sys-space-${v})`
          : `calc(var(--gds-sys-space-${v.substring(1)}) * -1)`
      return v === 'auto' ? 'auto' : val
    },
    styleTemplate: (prop, values) => {
      const transformValue = (v: string) => (v === 'auto' ? 'auto' : `${v}`)

      const top = transformValue(values[0])
      const right = values.length > 1 ? transformValue(values[1]) : top
      const bottom = values.length > 2 ? transformValue(values[2]) : top
      const left = values.length > 3 ? transformValue(values[3]) : right

      return `${prop}: ${top} ${right} ${bottom} ${left};`
    },
  }

function sanitizeVariableName(name: string) {
  return name.replace(/[^a-zA-Z0-9-]/g, '')
}
