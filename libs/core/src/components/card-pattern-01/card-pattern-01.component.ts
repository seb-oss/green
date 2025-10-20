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
import { withCardProps } from '../../utils/mixins/props-card'
import { withImageProps } from '../../utils/mixins/props-image'
import { withLinkProps } from '../../utils/mixins/props-link'
import { GdsCardLinked } from '../card-linked/card-linked.component'
import { GdsCard } from '../card/card.component'
import { GdsFlex } from '../flex/flex.component'
import { IconChainLink } from '../icon/icons/chain-link'
import { GdsImg } from '../img/img.component'
import { GdsText } from '../text/text.component'
import CardPattern01Styles from './card-pattern-01.styles'

/**
 * @element gds-card-pattern-01
 * @status beta
 *
 * @slot header - Custom header content
 * @slot footer - Action items (buttons, links)
 *
 * @property {string} href - Makes card clickable
 * @property {string} title - Card title
 * @property {string} excerpt - Card description
 * @property {string} label - Footer link text
 * @property {boolean} outlined - Adds border for the neutral 02
 * @property {'neutral-01' | 'neutral-02'} variant - Visual style
 * @property {'landscape' | 'square'} 'aspect-ratio' - Media ratio
 *
 */

@gdsCustomElement('gds-card-pattern-01', {
  dependsOn: [GdsCard, GdsCardLinked, GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardPattern01 extends withSizeXProps(
  withMarginProps(
    withLayoutChildProps(
      withLinkProps(withImageProps(withCardProps(GdsElement))),
    ),
  ),
) {
  static styles = [tokens, CardPattern01Styles]

  /**
   * Checks if footer content exists
   * @param isLinked - Determines if label should be considered for linked cards
   */
  #hasFooterContent(isLinked = false) {
    return (isLinked && this.label) || this.querySelector('[slot="footer"]')
  }

  /**
   * Determines card variant based on neutral-01/02 and outlined state
   * neutral-01 → primary
   * neutral-02 + outlined → secondary
   * neutral-02 → tertiary
   */
  #getVariant() {
    switch (this.variant) {
      case 'neutral-02':
        return this.outlined ? 'secondary' : 'tertiary'
      case 'neutral-01':
      default:
        return 'primary'
    }
  }

  /**
   * Renders linked version of the card
   * Includes href, target, and rel attributes
   */
  #renderLinkedCard() {
    return html`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel)}
        variant=${this.#getVariant()}
        class="card"
      >
        ${this.#renderCardContent()}
      </gds-card-linked>
    `
  }

  /**
   * Renders footer for linked cards
   * Includes accessibility attributes and default link
   */
  #renderLinkedFooter() {
    return when(
      this.#hasFooterContent(true),
      () => html`
        <gds-flex
          align-items="center"
          gap="m"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${when(
              this.label,
              () => html`
                <gds-link href=${ifDefined(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `,
            )}
          </slot>
        </gds-flex>
      `,
    )
  }

  /**
   * Renders static version of the card
   * Used when no href is provided
   */
  #renderStaticCard() {
    return html`
      <gds-card padding="0" gap="0" variant=${this.#getVariant()}>
        ${this.#renderCardContent()}
      </gds-card>
    `
  }

  /**
   * Renders footer for static cards
   * Simple slot without accessibility restrictions
   */
  #renderStaticFooter() {
    return when(
      this.#hasFooterContent(),
      () => html`
        <gds-flex align-items="center" gap="m">
          <slot name="footer"></slot>
        </gds-flex>
      `,
    )
  }

  /**
   * Renders card content structure
   * Includes media, header slot, title/excerpt, and footer
   * Header slot only shows when no media is present
   */
  #renderCardContent() {
    return html`
      ${when(
        this.src,
        () => html`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${ifDefined(this.src)}
              srcset=${ifDefined(this.srcset)}
              sizes=${ifDefined(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${this.ratio === 'square' ? '1/1' : '16/9'}
            ></gds-img>
          </gds-flex>
        `,
      )}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${when(!this.src, () => html`<slot name="header"></slot>`)}
        ${when(
          this.title || this.excerpt,
          () => html`
            <gds-flex flex-direction="column" gap="xs">
              ${when(
                this.title,
                () => html`
                  <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
                `,
              )}
              ${when(
                this.excerpt,
                () => html`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `,
              )}
            </gds-flex>
          `,
        )}
        ${when(
          this.href,
          () => this.#renderLinkedFooter(),
          () => this.#renderStaticFooter(),
        )}
      </gds-flex>
    `
  }

  render() {
    return when(
      this.href,
      () => this.#renderLinkedCard(),
      () => this.#renderStaticCard(),
    )
  }
}
