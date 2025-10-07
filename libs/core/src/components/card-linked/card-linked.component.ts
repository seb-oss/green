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
    if (!this.href) return this.#Parts.Core()

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

  get #slot() {
    return (slot: string) => this.querySelector(`[slot="${slot}"]`) !== null
  }

  get #render() {
    return {
      Single: (part: any) => part.render(),
      Group: (parts: any[]) => parts.map((part) => part.render()),
    }
  }

  #Parts = {
    Header: {
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

      Slot: () => this.#slot('header') && html`<slot name="header"></slot>`,

      Element: (content: TemplateResult[]) => html`
        <header class="header">${content}</header>
      `,

      render: () => {
        const { Image, Slot, Element } = this.#Parts.Header
        if (Slot()) return Element(Slot())
        if (this.src) return Element(Image())
        return nothing
      },
    },

    Article: {
      Title: () =>
        this.title &&
        html` <gds-text tag="h2" font="heading-s">${this.title}</gds-text> `,

      Excerpt: () =>
        this.excerpt &&
        html`
          <gds-text font="body-regular-m" lines="3">${this.excerpt}</gds-text>
        `,

      Element: (content: TemplateResult | TemplateResult[]) => html`
        <article class="article">${content}</article>
      `,

      render: () => {
        const { Title, Excerpt, Element } = this.#Parts.Article
        if (!this.title && !this.excerpt) return nothing
        return Element([Title(), Excerpt()])
      },
    },

    Footer: {
      Link: () =>
        this.label &&
        html`
          <gds-link href="#">
            <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
            ${this.label}
          </gds-link>
        `,

      Slot: () => this.#slot('footer') && html`<slot name="footer"></slot>`,

      Element: (content: TemplateResult | TemplateResult[]) => html`
        <footer class="footer" inert>${content}</footer>
      `,

      render: () => {
        const { Link, Slot, Element } = this.#Parts.Footer
        const content = [Link(), Slot()].filter(Boolean)
        return content.length ? Element(content) : nothing
      },
    },

    Main: (parts: TemplateResult[]) => html`
      <main class="main">${parts}</main>
    `,

    Core: () => {
      const { Header, Article, Footer, Main } = this.#Parts
      const { Single, Group } = this.#render
      return [Single(Header), Main(Group([Article, Footer]))]
    },
  }
}
