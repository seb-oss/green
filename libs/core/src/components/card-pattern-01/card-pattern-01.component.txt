import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import { GdsElement } from '../../gds-element'
import BaseCardStyles from '../../shared-styles/base-card.style'
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
import { GdsFlex } from '../flex/flex.component'
import { IconChainLink } from '../icon/icons/chain-link'
import { GdsImg } from '../img/img.component'
import { GdsText } from '../text/text.component'

/**
 * @element gds-card-pattern-01
 *
 * @summary A card component that acts as a clickable link, ideal for navigation and content previews.
 *
 * @description
 * The linked card component combines the visual structure of a card with the behavior of a link.
 * It supports different visual ranks, media layouts, and can include a title, excerpt, and footer.
 * The entire card is clickable while maintaining proper accessibility.
 *
 * @property {string} href - The URL that the card links to
 * @property {string} title - The main heading of the card
 * @property {string} excerpt - A brief description or preview text
 * @property {string} label - Text for the footer link (optional)
 * @property {'primary' | 'outlined' | 'plain'} appearance - Visual style of the card
 * @property {'default' | 'square'} 'aspect-ratio' - Aspect ratio for the media content
 * @property {string} src - URL for the card's image
 * @property {string} srcset - Responsive image srcset
 * @property {string} sizes - Responsive image sizes
 * @property {string} target - Link target (_blank, _self, etc.)
 * @property {string} rel - Link relationship attributes
 *
 * @slot footer - Optional footer content that is inert and only presentational only (buttons, additional links, etc.)
 *
 * @example
 * <gds-card-pattern-01
 *   href="/article"
 *   title="Article Title"
 *   excerpt="Brief description of the article"
 *   label="Read more"
 *   src="image.jpg"
 *   rank="primary"
 * >
 * </gds-card-pattern-01>
 */

@gdsCustomElement('gds-card-pattern-01', {
  dependsOn: [GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardPattern01 extends withSizeXProps(
  withMarginProps(
    withLayoutChildProps(
      withLinkProps(withImageProps(withCardProps(GdsElement))),
    ),
  ),
) {
  static styles = [tokens, BaseCardStyles]
  #Compose = createComposer(this)

  get #cardClasses() {
    return {
      ...this.classes('pattern-01'),
      'card-linked': !!this.href,
    }
  }

  #Parts = {
    Root: this.#Compose.Part({
      className: () => (this.href ? {} : this.#cardClasses),
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
                Link: () => !!this.href,
              },
              templates: {
                Link: () => html`
                  <gds-link
                    href=${ifDefined(this.href)}
                    tabindex=${this.href ? '-1' : '0'}
                    aria-hidden=${this.href ? 'true' : 'false'}
                    ?inert=${this.href}
                  >
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `,
              },
              wrapper: (content) =>
                html`<footer
                  class="part-footer"
                  tabindex=${this.href ? '-1' : '0'}
                  aria-hidden=${this.href ? 'true' : 'false'}
                  ?inert=${this.href}
                >
                  ${content}
                </footer>`,
            }),
          },
        }),
      },
      wrapper: this.href
        ? (content) => html`
            <a
              href=${ifDefined(this.href)}
              target=${ifDefined(this.target)}
              rel=${ifDefined(this.rel)}
              class=${classMap(this.#cardClasses)}
              tabindex="0"
              aria-label=${ifDefined(this.title || this.label)}
            >
              ${content}
            </a>
          `
        : undefined,
    }),
  }

  render() {
    return this.#Parts.Root.render()
  }
}
