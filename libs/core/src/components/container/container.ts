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
    property: 'position',
    valueTemplate: (v) => v,
  })
  position?: string

  @styleExpressionProperty({
    property: 'inset',
    valueTemplate: (v) => v,
  })
  inset?: string

  @styleExpressionProperty({
    property: 'overflow',
    valueTemplate: (v) => v,
  })
  overflow?: string

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

  @styleExpressionProperty({
    property: 'backdrop-filter',
    valueTemplate: (v) => `blur(${v})`,
  })
  filter?: string

  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-sys-radii-${v})`,
  })
  radius?: string

  @styleExpressionProperty({
    property: 'background',
    valueTemplate: (v) => v,
  })
  background?: string

  @styleExpressionProperty({
    property: 'color',
    valueTemplate: (v) => `var(--gds-sys-color-${v})`,
  })
  color?: string

  @styleExpressionProperty({
    property: 'height',
    valueTemplate: (v) => v,
  })
  height?: string

  // Border style and also width to apply to the border of the element using shorthand like border="0 1 2 3" nad then style will be applied to each side in order top right bottom left with defualt color

  render() {
    return html`<slot></slot>`
  }
}
