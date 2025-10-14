import { ifDefined } from 'lit/directives/if-defined.js'

import { GdsElement } from '../../gds-element'
import BaseCardSyles from '../../shared-styles/base-card.style'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { createComposer } from '../../utils/helpers/part-composer'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { withCardProps } from '../../utils/mixins/props-card'
import { withImageProps } from '../../utils/mixins/props-image'
import { withLinkProps } from '../../utils/mixins/props-link'
import { GdsCard } from '../card/card.component'
import { GdsFlex } from '../flex/flex.component'
import { IconChainLink } from '../icon/icons/chain-link'
import { GdsImg } from '../img/img.component'
import { GdsText } from '../text/text.component'

/**
 * @element gds-card-dynamic
 *
 * @summary A flexible card component that supports both linked and non-linked states with dynamic content rendering.
 *
 * @description
 * The dynamic card component provides a versatile card layout that can adapt based on its content.
 * Unlike the linked card, it maintains separate clickable elements and supports more flexible content structures.
 * It features conditional rendering of header image, title, excerpt, and footer link.
 *
 * @property {string} href - Optional URL for the footer link
 * @property {string} title - The main heading of the card
 * @property {string} excerpt - A brief description or preview text
 * @property {string} label - Text for the footer link (only shown when href is provided)
 * @property {'neutral' | 'outlined' | 'plain'} rank - Visual style of the card
 * @property {'landscape' | 'square'} media - Aspect ratio for the media content
 * @property {string} src - URL for the card's image
 * @property {string} srcset - Responsive image srcset
 * @property {string} sizes - Responsive image sizes
 *
 * @example
 * ```html
 * <gds-card-dynamic
 *   title="Article Title"
 *   excerpt="Brief description of the article"
 *   src="image.jpg"
 *   rank="neutral"
 * >
 *    <gds-button slot="footer">Primary</gds-button>
 *    <gds-button slot="footer" rank="secondary">Secondary</gds-button>
 * </gds-card-dynamic>
 * ```
 */
@gdsCustomElement('gds-card-dynamic', {
  dependsOn: [GdsCard, GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardDynamic extends withSizeXProps(
  withMarginProps(
    withLayoutChildProps(
      withLinkProps(withImageProps(withCardProps(GdsElement))),
    ),
  ),
) {
  static styles = [tokens, BaseCardSyles]
  #Compose = createComposer(this)

  #Parts = {
    Root: this.#Compose.Part({
      className: () => this.classes('dynamic'),
      parts: {
        Header: this.#Compose.Part({
          slot: 'header',
          wrap: true,
          conditions: {
            Image: () => !!this.src,
          },
          templates: {
            Image: () => html`
              <gds-img
                src=${ifDefined(this.src)}
                srcset=${ifDefined(this.srcset)}
                sizes=${ifDefined(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="xs"
                aspect-ratio=${this.aspectRatio === 'square' ? '1/1' : '16/9'}
              ></gds-img>
            `,
          },
        }),

        Main: this.#Compose.Part({
          wrap: true,
          parts: {
            Article: this.#Compose.Part({
              wrap: true,
              conditions: {
                Title: () => !!this.title,
                Excerpt: () => !!this.excerpt,
              },
              templates: {
                Title: () => html`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,
                Excerpt: () => html`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `,
              },
            }),

            Footer: this.#Compose.Part({
              slot: 'footer',
              wrap: true,
              conditions: {
                Link: () => !!this.label && !!this.href,
              },
              templates: {
                Link: () => html`
                  <gds-link href=${ifDefined(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `,
              },
            }),
          },
        }),
      },
    }),
  }

  render() {
    return this.#Parts.Root.render()
  }
}
