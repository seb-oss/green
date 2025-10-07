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
import CardLinkedStyles from './card-linked.styles'

/**
 * @element gds-card-linked
 */
@gdsCustomElement('gds-card-linked', {
  dependsOn: [GdsCard, GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardLinked extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [tokens, CardLinkedStyles]

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

  // Image

  @property()
  src?: string

  render() {
    return html`
      <a
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel || this.#defaultRel)}
        class=${classMap(this.#classes)}
      >
        ${this.#Parts.Core()}
      </a>
    `
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }

  get #classes() {
    return {
      card: true,
      'has-excerpt': !!this.excerpt,
    }
  }

  #Parts = {
    Header: () => {
      const Slot = this.querySelector('[slot="header"]') !== null
      const Image = !!this.src && !Slot

      if (!Image && !Slot) return nothing

      return html`
        <header class="header">
          ${Image
            ? html`
                <figure>
                  <gds-img
                    src=${ifDefined(this.src)}
                    width="100%"
                    height="100%"
                    object-fit="cover"
                    object-position="center"
                    border-radius="xs"
                  ></gds-img>
                </figure>
              `
            : html`<slot name="header"></slot>`}
        </header>
      `
    },

    Article: () => {
      if (!this.title && !this.excerpt) return nothing
      return html`
        <article class="article">
          ${this.title &&
          html`
            <h2 class="title">
              <gds-text font="heading-s">${this.title}</gds-text>
            </h2>
          `}
          ${this.excerpt &&
          html`
            <div class="excerpt">
              <gds-text font="body-regular-m" lines="3"
                >${this.excerpt}</gds-text
              >
            </div>
          `}
        </article>
      `
    },

    Footer: () => {
      const SLOT = this.querySelector('[slot="footer"]') !== null

      if (!SLOT && !this.href) {
        return nothing
      }

      return html`
        <footer class="footer" inert>
          <gds-link href="#">
            <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
            ${this.label}
          </gds-link>
          <slot name="footer"></slot>
        </footer>
      `
    },

    Main: (parts: TemplateResult[]) => html`
      <main class="main">${parts}</main>
    `,

    Core: () => {
      const { Header, Article, Footer, Main } = this.#Parts
      return [Header(), Main([Article(), Footer()])]
    },
  }
}
