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
import { createComposer } from '../../utils/helpers/part-composer'
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
  #Compose = createComposer(this)

  /**
   * The rank of the card. Defaults to "primary".
   */
  @property({ reflect: true })
  rank: 'neutral' | 'outlined' | 'plain' = 'neutral'

  @property()
  title = ''

  @property()
  excerpt = ''

  @property()
  label = ''

  @property()
  href?: string

  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  @property()
  rel?: string

  @property()
  src?: string

  get #classes() {
    return {
      card: true,
      'card-dynamic': true,
      [`rank-${this.rank}`]: true,
    }
  }

  #Parts = {
    Root: this.#Compose.Part({
      className: () => this.#classes,
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
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="3xs"
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
