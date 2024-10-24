import { CSSResult, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { GdsElement } from 'src/gds-element'

import { parse, toCss, tokenize } from '../helpers/style-expression-parser'
import { watch } from './watch'

/**
 * Options for `@styleExpressionProperty`.
 */
export type StyleExpressionPropertyOptions = {
  /** The DOM-attribute to bind to. Same as the attribute option on Lits @property decorator */
  attribute?: string

  /** The selector to use for the CSS rule. Defaults to `:host` */
  selector?: string

  /** The CSS property to set. Defaults to the property key, i.e if the decorator is
   * attached to a property named `padding`, the default name of the CSS property will
   * also be `padding`. This option overrides that. */
  property?: string

  /** A function that takes a value and returns a string. Defaults to `(value) => 'var(--gds-space-${value})'`
   * This can be used to resolve the values into CSS variables for example. */
  valueTemplate?: (value: string) => string

  /** A function that takes a property name and an array of values and returns a string. Defaults to
   * `(property, values) => `${property}: ${values.join(' ')};`
   * This can be used to customize the generated CSS. This runs after the `valueTemplate` is executed. */
  styleTemplate?: (property: string, values: string[]) => string

  /** Set this to something unique if the property suffers from caching issues.
   * This can typically happen if a identically named combo of property and selector is used in multiple
   * components with different style or value templates.
   */
  cacheOverrideKey?: string
}

const styleCache = new Map<string, CSSResult>()

/**
 * A decorator that can be used to create a Style Expression Property.
 *
 * @param options Options for the decorator.
 */
export function styleExpressionProperty(
  options?: StyleExpressionPropertyOptions,
) {
  return <ElemClass extends GdsElement>(
    proto: ElemClass,
    descriptor: PropertyKey,
  ) => {
    const sel = options?.selector ?? String(':host')
    const prop = options?.property ?? String(descriptor)
    const valueTemplate =
      options?.valueTemplate ?? ((v) => `var(--gds-space-${v}, 0)`)
    const styleTemplate = options?.styleTemplate
    const cacheKey = options?.cacheOverrideKey ?? `0`

    // Jack into Lits property decorator
    property({ attribute: options?.attribute, noAccessor: true })(
      proto,
      descriptor,
    )

    // Define the getter and setter for the property
    Object.defineProperty(proto, descriptor, {
      get: function () {
        return this['__' + String(descriptor)]
      },
      set: async function (newValue) {
        this['__' + String(descriptor)] = newValue
        await this.updateComplete

        const styleKey = sel + prop + newValue + cacheKey

        if (styleCache.has(styleKey)) {
          ;(this as GdsElement)._dynamicStylesController.inject(
            `sep_${String(descriptor)}`,
            styleCache.get(styleKey) as CSSResult,
          )
          return
        }

        const ast = parse(tokenize(newValue as string))
        const css = toCss(
          sel,
          prop,
          ast,
          valueTemplate.bind(this),
          styleTemplate?.bind(this),
        )

        const style = unsafeCSS(css)
        styleCache.set(styleKey, style)
        ;(this as GdsElement)._dynamicStylesController.inject(
          `sep_${String(descriptor)}`,
          style,
        )
      },
    })
  }
}
