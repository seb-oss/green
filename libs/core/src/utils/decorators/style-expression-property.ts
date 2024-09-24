import { unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { GdsElement } from 'src/gds-element'
import { watch } from './watch'
import { tokenize, parse, toCss } from '../helpers/style-expression-parser'

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
}

/**
 * A decorator that can be used to create a Style Expression Property.
 *
 * @param options Options for the decorator.
 */
export function styleExpressionProperty(options?: StyleExpressionPropertyOptions) {
  return <ElemClass extends GdsElement>(proto: ElemClass, descriptor: PropertyKey) => {
    const sel = options?.selector ?? String(':host')
    const prop = options?.property ?? String(descriptor)
    const valueTemplate = options?.valueTemplate ?? (v => `var(--gds-space-${v})`)
    const styleTemplate = options?.styleTemplate

    // Jack into Lits property decorator
    property({ attribute: options?.attribute })(proto, descriptor)

    // And also our own watch decorator to catch changes
    watch(descriptor as string)(proto, descriptor as string, {
      value: function (oldValue: unknown, newValue: unknown) {
        const ast = parse(tokenize(newValue as string))
        const css = toCss(sel, prop, ast, valueTemplate.bind(this), styleTemplate?.bind(this))
        ;(this as any)[`__${String(descriptor)}_ast`] = ast
        ;(this as GdsElement)._dynamicStylesController.inject(`sep_${String(descriptor)}`, unsafeCSS(css))
      }
    })
  }
}
