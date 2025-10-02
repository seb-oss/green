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
    if (this.href) {
      const content = this.#Variants.Linked.Content()
      return this.#Variants.Linked.Wrapper(content)
    }

    return this.#Variants.Standard.Content()
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }

  #Variants = {
    Linked: {
      Wrapper: (content: TemplateResult) => html`
        <a
          href=${ifDefined(this.href)}
          target=${ifDefined(this.target)}
          rel=${ifDefined(this.rel || this.#defaultRel)}
          class="linked"
        >
          ${content}
        </a>
      `,
      Content: () => html`
        ${this.#Parts.Header()} ${this.#Parts.Main()} ${this.#Parts.Footer()}
      `,
    },

    Standard: {
      Content: () => html`
        ${this.#Parts.Header()} ${this.#Parts.Main()} ${this.#Parts.Footer()}
      `,
    },
  }

  #Parts = {
    Footer: () => html`
      <footer class="footer">
        ${when(
          this.prompt,
          () => html` <gds-text class="prompt">${this.prompt}</gds-text> `,
        )}
        <slot name="footer"></slot>
      </footer>
    `,

    Header: () => html`
      <header class="header">
        ${when(
          this.src,
          () => html`
            <gds-img
              src=${ifDefined(this.src)}
              aspect-ratio=${ifDefined(this['aspect-ratio'])}
            ></gds-img>
          `,
        )}
        <slot name="header"></slot>
      </header>
    `,

    Main: () => html`
      <main class="main">
        <gds-text variant="title">${this.title}</gds-text>
        ${when(
          this.excerpt,
          () => html` <gds-text variant="body">${this.excerpt}</gds-text> `,
        )}
        <slot></slot>
      </main>
    `,
  }
}
