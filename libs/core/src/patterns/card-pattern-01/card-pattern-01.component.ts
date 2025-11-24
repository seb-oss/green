import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'

import { GdsCardLinked } from '../../components/card-linked/card-linked.component'
import { GdsCard } from '../../components/card/card.component'
import { GdsFlex } from '../../components/flex/flex.component'
import { GdsFormattedDate } from '../../components/formatted-text/date/formatted-date.component'
import { IconChainLink } from '../../components/icon/icons/chain-link'
import { GdsImg } from '../../components/img/img.component'
import { GdsText } from '../../components/text/text.component'
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
import { withImageProps } from '../../utils/mixins/props-image'
import { withLinkProps } from '../../utils/mixins/props-link'
import CardPattern01Styles from './card-pattern-01.styles'

import type { DateTimeFormat } from '../../components/formatted-text/date/date-time-formatter'

/**
 * @element gds-card-pattern-01
 * @status beta
 *
 * @slot header - Custom header content
 * @slot footer - Action items (buttons, links)
 *
 */

@gdsCustomElement('gds-card-pattern-01', {
  dependsOn: [
    GdsCard,
    GdsCardLinked,
    GdsImg,
    GdsText,
    GdsFlex,
    GdsFormattedDate,
    IconChainLink,
  ],
})
export class GdsCardPattern01 extends withSizeXProps(
  withMarginProps(
    withLayoutChildProps(withLinkProps(withImageProps(GdsElement))),
  ),
) {
  static styles = [tokens, CardPattern01Styles]

  /**
   * The main title of the card
   */
  @property({ reflect: false })
  title = ''

  /**
   * A brief description or summary text
   */
  @property({ reflect: false })
  excerpt = ''

  /**
   * Optional label text used on the linked card footer decorative element.
   */
  @property({ reflect: false })
  label = ''

  /**
   * Card background variant
   */
  @property({ reflect: false })
  variant: 'neutral-01' | 'neutral-02' = 'neutral-01'

  /**
   * Enables border styling
   * Designed to work with neutral-02 variant
   */
  @property({ type: Boolean, reflect: false })
  outlined = false

  /**
   * HTML tag for the card title
   * Controls heading level for accessibility
   */
  @property({ reflect: false })
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2'

  /**
   * Aspect ratio/format of the card's media section
   * - landscape: 16:9 or similar horizontal format
   * - square: 1:1 square format
   */
  @property({ reflect: false, attribute: 'aspect-ratio' })
  ratio: 'landscape' | 'square' = 'landscape'

  /** Category */
  @property({ reflect: false })
  category = ''

  /** Date */
  @property({ reflect: false })
  date = ''

  /**
   * Date format to use for displaying the date. Check the GdsFormattedDate component for more details on accepted formats.
   */
  @property({ reflect: false, attribute: 'date-format' })
  dateFormat: DateTimeFormat = 'dateTimeLong'

  /**
   * Locale for date formatting (e.g., 'sv-SE', 'en-GB', 'en-US')
   */
  @property({ reflect: false })
  locale = 'en-GB'

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

  #getClasses(type?: 'linked' | 'static'): ReturnType<typeof classMap> {
    return classMap({
      card: true,
      outlined: this.outlined,
      [`card-${type}`]: !!type,
      [`variant-${this.variant}`]: true,
      [`ratio-${this.ratio}`]: true,
    })
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
        class=${this.#getClasses('linked')}
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
          font="detail-book-m"
          align-items="center"
          gap="s"
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
      <gds-card
        padding="0"
        gap="0"
        variant=${this.#getVariant()}
        class=${this.#getClasses('static')}
      >
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
        <gds-flex font="detail-book-m" align-items="center" gap="s">
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
              loading=${ifDefined(this.loading)}
              decoding=${ifDefined(this.decoding)}
              alt=${ifDefined(this.alt)}
              class="card-media"
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
                this.category || this.date,
                () => html`
                  <gds-flex gap="s" align-items="center" flex-wrap="wrap">
                    ${when(
                      this.category,
                      () =>
                        html` <gds-text tag="p" font="detail-book-s">
                          ${this.category}
                        </gds-text>`,
                    )}
                    ${when(
                      this.date,
                      () => html`
                        <gds-formatted-date
                          .value=${this.date}
                          .locale=${this.locale}
                          .format=${this.dateFormat}
                          font="detail-book-s"
                          color="neutral-02"
                        ></gds-formatted-date>
                      `,
                    )}
                  </gds-flex>
                `,
              )}
              ${when(
                this.title,
                () => html`
                  <gds-text tag=${ifDefined(this.tag)} font="heading-s">
                    ${this.title}
                  </gds-text>
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
