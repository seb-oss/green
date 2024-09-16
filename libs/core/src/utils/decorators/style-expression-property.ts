import { unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { GdsElement } from 'src/gds-element'
import { watch } from './watch'
import { tokenize, parse, toCss } from '../helpers/style-expression-parser'

export type StyleExpressionPropertyOptions = {
  attribute?: string
  selector?: string
  property?: string
  valueTemplate?: (value: string) => string
  styleTemplate?: (property: string, values: string[]) => string
}

/**
 * Property decorator for creating style expression properties.
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
      options?.valueTemplate ?? ((v) => `var(--gds-space-${v})`)
    const styleTemplate = options?.styleTemplate

    const states = [null, 'hover', 'focus-within']

    states.forEach((state) => {
      const d = state ? `${state}:${String(descriptor)}` : String(descriptor)

      // Jack into Lits property decorator
      property({
        attribute:
          options?.attribute && `${state}:${String(options.attribute)}`,
      })(proto, d)

      // And also our own watch decorator to catch changes
      watch(d)(proto, d, {
        value: function (oldValue: unknown, newValue: unknown) {
          const ast = parse(tokenize(newValue as string))
          const css = toCss(
            state ? sel + `(:${state})` : sel,
            prop,
            ast,
            valueTemplate,
            styleTemplate,
          )
          console.log('watch', d, css)
          ;(this as any)[`__${d}_ast`] = ast
          ;(this as GdsElement)._dynamicStylesController.inject(
            `sep_${d}`,
            unsafeCSS(css),
          )
        },
      })
    })
  }
}
