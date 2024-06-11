import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import ContainerCSS from './container.style.css'

@gdsCustomElement('gds-container')
export class GdsContainer extends GdsElement {
  static styles = [tokens, ContainerCSS]

  @styleExpressionProperty({
    styleTemplate: (_prop, values) => {
      const colGap = values[0]
      const rowGap = values[1] || colGap
      return `--_gap-column: ${colGap}; --_gap-row: ${rowGap};`
    },
  })
  gap?: string

  @styleExpressionProperty({
    property: '--_row-gap',
    valueTemplate: (v) => v,
  })
  rowGap?: string

  @styleExpressionProperty()
  padding?: string

  @styleExpressionProperty({
    property: 'display',
    valueTemplate: (v) => v,
  })
  display?: string

  @styleExpressionProperty({
    property: 'align-items',
    valueTemplate: (v) => v,
  })
  align?: string

  @styleExpressionProperty({
    property: 'justify-content',
    valueTemplate: (v) => v,
  })
  justify?: string

  @styleExpressionProperty({
    property: 'flex-direction',
    valueTemplate: (v) => v,
  })
  direction?: string

  // https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
  @styleExpressionProperty({
    property: 'grid-column',
    valueTemplate: (v) => `${v}`,
  })
  column?: string

  // https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
  @styleExpressionProperty({
    property: 'grid-row',
    valueTemplate: (v) => `${v}`,
  })
  row?: string

  render() {
    return html`<slot></slot>`
  }
}
