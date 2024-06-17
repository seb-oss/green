import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import TextCSS from './text.style.css'

@gdsCustomElement('gds-text')
export class GdsText extends GdsElement {
  static styles = [tokens, TextCSS]

  @property({ type: String })
  tag = 'p'

  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
    styleTemplate: (prop, values) => {
      const size = values[0]
      return `font-size: var(--gds-sys-typography-size-${size}); line-height: var(--gds-sys-typography-line-height-${size});`
    },
  })
  size?: string

  @styleExpressionProperty()
  margin?: string

  createTag() {
    const tag = document.createElement(this.tag)
    tag.appendChild(document.createElement('slot'))
    return tag
  }

  render() {
    return html`${this.createTag()}`
  }
}
