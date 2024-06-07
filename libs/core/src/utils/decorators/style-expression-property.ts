import { property } from 'lit/decorators.js'
import { GdsElement } from 'src/gds-element'
import { watch } from './watch'
import { tokenize, parse, toCss } from '../helpers/style-expression-parser'

/**
 * todo
 */
export function styleExpressionProperty() {
  return <ElemClass extends GdsElement>(
    proto: ElemClass,
    descriptor: PropertyKey,
  ) => {
    // Jack into Lits property decorator
    property({ reflect: true })(proto, descriptor)

    // And also our own watch decorator to catch changes
    watch(descriptor as string)(proto, descriptor as string, {
      value: function (oldValue: unknown, newValue: unknown) {
        // console.log('styleExpressionProperty', oldValue, newValue)
        // console.log(this)

        const ast = parse(tokenize(newValue as string))
        const css = toCss(descriptor as string, ast)
        ;(this as any)[`__${String(descriptor)}_ast`] = ast

        console.log(css)
      },
    })
  }
}
