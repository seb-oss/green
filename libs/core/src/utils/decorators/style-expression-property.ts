import { CSSResult, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { parse, toCss, tokenize } from '../helpers/style-expression-parser'

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

  /** A function that takes a value and returns a string. Defaults to `(value) => 'var(--gds-sys-space-${value})'`
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

  /**
   * If true, mirror the property value to a DOM attribute (for CSS selectors).
   */
  reflect?: boolean
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
    const prop = options?.property ?? String(descriptor)
    const valueTemplate = options?.valueTemplate
    const styleTemplate = options?.styleTemplate
    const cacheKey = options?.cacheOverrideKey ?? `0`
    const attributeName = options?.attribute ?? String(descriptor)

    // Jack into Lits property decorator
    property({
      attribute: attributeName,
      reflect: options?.reflect,
      noAccessor: true,
    })(proto, descriptor)

    // Define the getter and setter for the property
    Object.defineProperty(proto, descriptor, {
      get: function () {
        return this['__' + String(descriptor)]
      },
      set: async function (newValue) {
        if (!newValue) {
          if (options?.reflect) this.removeAttribute(attributeName)
          return
        }

        this['__' + String(descriptor)] = newValue

        if (options?.reflect) {
          this.setAttribute(attributeName, String(newValue))
        }

        await this.updateComplete

        const sel =
          options?.selector ?? this.constructor.styleExpressionBaseSelector

        // If the element has level defined, we need to use it in the cache key
        const lvl = (this as any).level ?? '0'
        const styleKey = sel + prop + newValue + lvl + cacheKey

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
          valueTemplate?.bind(this),
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
