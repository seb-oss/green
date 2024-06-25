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
 * todo
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

    // Jack into Lits property decorator
    property({ attribute: options?.attribute })(proto, descriptor)

    // And also our own watch decorator to catch changes
    watch(descriptor as string)(proto, descriptor as string, {
      value: function (oldValue: unknown, newValue: unknown) {
        const ast = parse(tokenize(newValue as string))
        const css = toCss(sel, prop, ast, valueTemplate, styleTemplate)
        ;(this as any)[`__${String(descriptor)}_ast`] = ast

        console.log(css)
        ;(this as GdsElement)._dynamicStylesController.inject(
          `sep_${String(descriptor)}`,
          unsafeCSS(css),
        )
      },
    })
  }
}
