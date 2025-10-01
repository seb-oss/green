import { nothing } from 'lit'
import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsCard } from '../card/card.component'
import { GdsFlex } from '../flex/flex.component'
import { IconChainLink } from '../icon/icons/chain-link'
import { GdsImg } from '../img/img.component'
import { GdsText } from '../text/text.component'
import CardInteractiveStyles from './card-interactive.styles'

/**
 * @element gds-card-interactive
 */
@gdsCustomElement('gds-card-interactive', {
  dependsOn: [GdsCard, GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardInteractive extends GdsElement {
  static styles = [tokens, CardInteractiveStyles]

  @property()
  title = ''

  @property()
  excerpt?: string

  @property()
  prompt?: string

  @property({ type: Boolean })
  plain = false

  @property()
  media?: 'image' | 'video' = 'image'

  @property()
  src?: string

  @property()
  'aspect-ratio'?: string

  @property()
  href?: string

  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  @property()
  rel?: string

  render() {
    return this.#renderContents()
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }

  #renderContents() {
    return this.href ? this.#renderLinked() : this.#renderSlottable()
  }

  #renderLinked() {
    return html`
      <a
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel || this.#defaultRel)}
      >
        <gds-card
          variant=${this.plain ? 'secondary' : 'primary; hover:secondary'}
          border=${this.plain ? '5xs solid transparent' : nothing}
          class="card"
          padding=${this.src ? 'xs' : nothing}
          border-radius="m"
        >
          ${when(
            this.src,
            () =>
              html`<gds-img
                src=${ifDefined(this.src)}
                width="100%"
                height="100%"
                aspect-ratio=${ifDefined(this['aspect-ratio'])}
                border-radius="xs"
                object-fit="cover"
                object-position="center"
              ></gds-img>`,
          )}

          <gds-flex
            flex-direction="column"
            gap="xl"
            padding=${this.plain || !this.src ? '0' : 'm'}
          >
            <gds-flex flex-direction="column" gap="xs">
              <gds-text font="heading-s" color="neutral-01">
                ${this.title}
              </gds-text>
              <gds-text font="body-regular-m" lines="3">
                ${this.excerpt}
              </gds-text>
            </gds-flex>
            <gds-flex gap="xs" align-items="center">
              <gds-icon-chain-link size="l"></gds-icon-chain-link>
              <gds-text font="detail-book-m" color="neutral-01"
                >${this.prompt}</gds-text
              >
            </gds-flex>
          </gds-flex>
        </gds-card>
      </a>
    `
  }

  #renderSlottable() {
    return html`<slot></slot>`
  }
}
