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
    }
  }

  #Parts = {
    Root: this.#Compose.Part({
      parts: {
        Header: this.#Compose.Part({
          slot: 'header',
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
                border-radius="xs"
              ></gds-img>
            `,
          },
          wrapper: (content) =>
            html`<header class="header">${content}</header>`,
        }),

        Main: this.#Compose.Part({
          parts: {
            Article: this.#Compose.Part({
              conditions: {
                Title: () => !!this.title,
                Excerpt: () => !!this.excerpt,
              },
              templates: {
                Title: () => html`<gds-text tag="h2">${this.title}</gds-text>`,
                Excerpt: () =>
                  html`<gds-text lines="3">${this.excerpt}</gds-text>`,
              },
              wrapper: (content) =>
                html`<article class="article">${content}</article>`,
            }),

            Footer: this.#Compose.Part({
              slot: 'footer',
              conditions: {
                Label: () => !!this.label,
              },
              templates: {
                Label: () => html`
                  <gds-link href="#">
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `,
              },
              wrapper: (content) =>
                html`<footer class="footer">${content}</footer>`,
            }),
          },
          wrapper: (content) => html`<main class="main">${content}</main>`,
        }),
      },
      wrapper: (content) =>
        html`<div class=${classMap(this.#classes)}>${content}</div>`,
    }),
  }

  render() {
    return this.#Parts.Root.render()
  }
}
