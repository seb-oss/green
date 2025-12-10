import { css } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { withLinkProps } from '../../utils/mixins/props-link'
import { GdsCard } from '../card/card.component'
import CardLinkedStyles from './card-linked.styles'

/**
 * @element gds-card-linked
 * @status beta
 */
@gdsCustomElement('gds-card-linked')
export class GdsCardLinked extends withLinkProps(GdsCard) {
  static styles = [tokens, CardLinkedStyles]
  static styleExpressionBaseSelector = 'a'

  render() {
    return html`<a
      href=${ifDefined(this.href)}
      target=${ifDefined(this.target)}
      rel=${ifDefined(this.rel)}
      ping=${ifDefined(this.ping)}
      download=${ifDefined(this.download)}
      tabindex="0"
    >
      <slot></slot>
    </a>`
  }
}
