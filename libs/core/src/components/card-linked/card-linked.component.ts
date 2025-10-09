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
import { GdsCard } from '../card/card.component'
import { GdsFlex } from '../flex/flex.component'
import { IconChainLink } from '../icon/icons/chain-link'
import { GdsImg } from '../img/img.component'
import { GdsText } from '../text/text.component'

/**
 * @element gds-card-linked
 */
@gdsCustomElement('gds-card-linked', {
  dependsOn: [GdsCard, GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardLinked extends withSizeXProps(
  withMarginProps(
    withLayoutChildProps(
      withLinkProps(withImageProps(withCardProps(GdsElement))),
    ),
  ),
) {
  static styles = [tokens, BaseCardStyles]
  #Compose = createComposer(this)

  #Parts = {
    Root: this.#Compose.Part({
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
                border-radius="3xs"
                aspect-ratio=${this.media === 'square' ? '1/1' : '16/9'}
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
                Link: () => !!this.label,
              },
              templates: {
                Link: () => html`
                  <gds-link inert>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `,
              },
              wrapper: (content) =>
                html`<footer class="part-footer" inert>${content}</footer>`,
            }),
          },
        }),
      },
      wrapper: (content) =>
        html`<a
          href=${ifDefined(this.href)}
          target=${ifDefined(this.target)}
          rel=${ifDefined(this.rel)}
          class=${classMap(this.classes('linked'))}
        >
          ${content}
        </a>`,
    }),
  }

  render() {
    return this.#Parts.Root.render()
  }
}
