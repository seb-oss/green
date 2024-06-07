import { property } from 'lit/decorators.js'
import { GdsElement } from 'src/gds-element'
import { watch } from './watch'
import { tokenize, parse, toCss } from '../helpers/style-expression-parser'

export type StyleExpressionPropertyOptions = {
  selector: string
  property?: string
}

/**
 * todo
 */
export function styleExpressionProperty(
  options: StyleExpressionPropertyOptions,
) {
  return <ElemClass extends GdsElement>(
    proto: ElemClass,
    descriptor: PropertyKey,
  ) => {
    const sel = options.selector
    const prop = options.property ?? String(descriptor)

    // Jack into Lits property decorator
    property({ reflect: true })(proto, descriptor)

    // And also our own watch decorator to catch changes
    watch(descriptor as string)(proto, descriptor as string, {
      value: function (oldValue: unknown, newValue: unknown) {
        const ast = parse(tokenize(newValue as string))
        const css = toCss(sel, prop, ast)
        ;(this as any)[`__${String(descriptor)}_ast`] = ast

        console.log(css)
      },
    })
  }
}
