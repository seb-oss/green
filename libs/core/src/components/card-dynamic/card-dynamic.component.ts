import { nothing, TemplateResult } from 'lit'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsCard } from '../card/card.component'
import { GdsFlex } from '../flex/flex.component'
import { IconChainLink } from '../icon/icons/chain-link'
import { GdsImg } from '../img/img.component'
import { GdsText } from '../text/text.component'
import CardLinkedStyles from './card-dynamic.styles'

/**
 * @element gds-card-dynamic
 */
@gdsCustomElement('gds-card-dynamic', {
  dependsOn: [GdsCard, GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardDynamic extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [tokens, CardLinkedStyles]

  render() {
    return html`Dynamic`
  }
}
