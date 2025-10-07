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
  excerpt = ''

  @property()
  href?: string

  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  @property()
  rel?: string

  render() {
    // const [header, main, footer] = this.#Part

    return html`
      <a
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel || this.#defaultRel)}
        class=${classMap(this.#classes)}
      >
        ${this.#Content}
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

  get #Content() {
    return [this.#Parts.Header(), this.#Parts.Main(), this.#Parts.Footer()]
  }

  #Parts = {
    Header: () => {
      return html`
        <header class="header">
          <slot name="header"></slot>
        </header>
      `
    },

    Main: () => {
      return html`
        <main class="main">
          <gds-text font="heading-s">${this.title}</gds-text>
          <gds-text font="body-regular-m" lines="3">${this.excerpt}</gds-text>
        </main>
      `
    },

    Footer: () => {
      return html`
        <footer class="footer" inert>
          <gds-link href="#">
            <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
            Read more
          </gds-link>
          <slot name="footer"></slot>
        </footer>
      `
    },
  }
}
