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

  render() {
    return html`<${this.tag}><slot></slot></${this.tag}>`
  }
}
