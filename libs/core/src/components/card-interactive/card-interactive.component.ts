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

  @property()
  type: 'linked' | 'dynamic' = 'linked'

  @property()
  layout: 'contained' | 'plain' = 'contained'

  @property()
  media?: 'square' | 'portrait' | 'landscape' = 'landscape'

  @property()
  src?: string

  @property()
  href?: string

  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  @property()
  rel?: string

  render() {
    if (this.type == 'linked') {
      const content = this.#Variants.Linked.Content()
      return this.#Variants.Linked.Wrapper(content)
    }

    return this.#Variants.Standard.Content()
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }

  get #classes() {
    return {
      card: true,
      [`type-${this.type}`]: true,
      [`layout-${this.layout}`]: true,
      media: !!this.src,
      [`media-${this.media}`]: true,
    }
  }

  get #contentParts() {
    return [this.#Parts.Header(), this.#Parts.Main(), this.#Parts.Footer()]
  }

  #Variants = {
    Linked: {
      Wrapper: (content: TemplateResult) => html`
        <a
          href=${ifDefined(this.href)}
          target=${ifDefined(this.target)}
          rel=${ifDefined(this.rel || this.#defaultRel)}
          class=${classMap(this.#classes)}
        >
          ${content}
        </a>
      `,
      Content: () => {
        const [header, main, footer] = this.#contentParts
        return html`
          ${header}
          <div class="content">${main} ${footer}</div>
        `
      },
    },

    Standard: {
      Content: () => {
        const [header, main, footer] = this.#contentParts
        return html`
          <div class=${classMap(this.#classes)}>
            ${header}
            <div class="content">${main} ${footer}</div>
          </div>
        `
      },
    },
  }

  #Parts = {
    Header: () => {
      const hasHeaderContent = this.querySelector('[slot="header"]') !== null

      if (!this.src && !hasHeaderContent) {
        return nothing
      }

      return html`
        <header class="header">
          ${when(
            this.src && !hasHeaderContent,
            () => html`
              <gds-img
                src=${ifDefined(this.src)}
                object-fit="cover"
                object-position="center"
                border-radius="s"
                width="100%"
                height="100%"
              ></gds-img>
            `,
          )}
          <slot name="header"></slot>
        </header>
      `
    },

    Footer: () => {
      const footerContent = []
      const hasFooterContent = this.querySelector('[slot="footer"]') !== null

      if (
        (this.type === 'linked' && !this.href) ||
        (!this.prompt && !hasFooterContent)
      ) {
        return nothing
      }

      if (this.type === 'linked' && this.prompt) {
        footerContent.push(html`
          <div class="pseudo-link">
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text font="detail-book-m" class="prompt">
              ${this.prompt}
            </gds-text>
          </div>
        `)
      }

      if (this.type === 'dynamic' && this.prompt && !hasFooterContent) {
        footerContent.push(html`
          <a
            href=${ifDefined(this.href)}
            target=${ifDefined(this.target)}
            rel=${ifDefined(this.rel || this.#defaultRel)}
            class="prompt-link"
          >
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text class="prompt">${this.prompt}</gds-text>
          </a>
        `)
      }

      if (this.type === 'dynamic' && hasFooterContent) {
        footerContent.push(html`<slot name="footer"></slot>`)
      } else {
        footerContent.push(html`<slot name="footer"></slot>`)
      }

      return html`<footer class="footer">${footerContent}</footer>`
    },

    Main: () => html`
      <main class="main">
        <gds-text font="heading-s">${this.title}</gds-text>
        ${when(
          this.excerpt,
          () => html`
            <gds-text font="body-regular-m" lines="3">${this.excerpt}</gds-text>
          `,
        )}
        <slot></slot>
      </main>
    `,
  }
}
