import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
// import BaseCardStyles from '../../shared-styles/base-card.style'
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
import { withCardProps } from '../../utils/mixins/props-card'
import { withImageProps } from '../../utils/mixins/props-image'
import { withLinkProps } from '../../utils/mixins/props-link'
import { GdsCardLinked } from '../card-linked/card-linked.component'
import { GdsCard } from '../card/card.component'
import { GdsFlex } from '../flex/flex.component'
import { IconChainLink } from '../icon/icons/chain-link'
import { GdsImg } from '../img/img.component'
import { GdsText } from '../text/text.component'

/**
 * @element gds-card-pattern-01
 *
 * @example
 * <gds-card-pattern-01>
 * </gds-card-pattern-01>
 */

@gdsCustomElement('gds-card-pattern-01', {
  dependsOn: [GdsCard, GdsCardLinked, GdsImg, GdsText, GdsFlex, IconChainLink],
})
export class GdsCardPattern01 extends withSizeXProps(
  withMarginProps(
    withLayoutChildProps(
      withLinkProps(withImageProps(withCardProps(GdsElement))),
    ),
  ),
) {
  static styles = [tokens]

  get #cardClasses() {
    return {
      ...this.classes('pattern-01'),
      'card-linked': !!this.href,
    }
  }

  #renderImage() {
    return when(
      this.src,
      () => html`
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
    )
  }

  #renderTitle() {
    return when(
      this.title,
      () => html`
        <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
      `,
    )
  }

  #renderExcerpt() {
    return when(
      this.excerpt,
      () => html`
        <gds-text tag="p" lines="3" font="body-regular-m">
          ${this.excerpt}
        </gds-text>
      `,
    )
  }

  #renderLinkedCard() {
    return html`
      <gds-card-linked
        padding="xs"
        class=${classMap(this.#cardClasses)}
        gap="0"
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel)}
      >
        <gds-flex>${this.#renderImage()}</gds-flex>
        <gds-flex flex-direction="column" gap="xl" padding="m">
          <gds-flex flex-direction="column" gap="xs">
            ${this.#renderTitle()} ${this.#renderExcerpt()}
          </gds-flex>
          <gds-flex
            align-items="center"
            gap="s"
            pointer-events="none"
            aria-hidden="true"
            inert
          >
            <slot name="footer">
              ${when(
                this.href && this.label,
                () => html`
                  <gds-link href=${ifDefined(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `,
              )}
            </slot>
          </gds-flex>
        </gds-flex>
      </gds-card-linked>
    `
  }

  #renderStaticCard() {
    return html`
      <gds-card padding="xs" class=${classMap(this.#cardClasses)} gap="0">
        <header class="part-header">${this.#renderImage()}</header>
        <main class="part-main">
          <article class="part-article">
            ${this.#renderTitle()} ${this.#renderExcerpt()}
          </article>
          <footer class="part-footer">
            <slot name="footer"></slot>
          </footer>
        </main>
      </gds-card>
    `
  }

  render() {
    return when(
      this.href,
      () => this.#renderLinkedCard(),
      () => this.#renderStaticCard(),
    )
  }
}
