import { localized } from '@lit/localize'
import { nothing } from 'lit'
import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { IconChevronRight } from '../../icon/icons/chevron-right.component'
import { GdsLink } from '../../link/link.component'
import { GdsText } from '../../text/text.component'
import BreadcrumbsItemStyles from './breadcrumbs-item.styles'

/**
 * @element gds-breadcrumbs-item
 * @summary The `gds-breadcrumbs-item`
 *
 */
@gdsCustomElement('gds-breadcrumbs-item', {
  dependsOn: [GdsLink, GdsText, IconChevronRight],
})
@localized()
export class GdsBreadcrumbsItem extends GdsElement {
  static styles = [BreadcrumbsItemStyles]

  @property()
  href = ''

  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  @property()
  rel?: string

  @property()
  label = ''

  @property()
  download?: string

  @property({ type: Boolean, reflect: true })
  overflow = false

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }

  render() {
    return html`
      <div
        role="listitem"
        aria-current=${ifDefined(!this.href ? 'page' : undefined)}
      >
        ${this.#renderContents()}
      </div>
    `
  }

  #renderContents() {
    const elements = [this.#renderMainContent(), this.#renderSeparator()]
    return elements.map((element) => html`${element}`)
  }

  #renderMainContent() {
    if (this.overflow) return this.#renderOverflowMenu()
    if (this.href) return this.#renderItem()
    return this.#renderCurrent()
  }

  #renderSeparator() {
    if (!this.href && !this.overflow) return nothing
    return html`<span class="separator" aria-hidden="true">/</span>`
  }

  #renderOverflowMenu() {
    return html`<slot></slot>`
  }

  #renderItem() {
    return html`
      <gds-link
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel || this.#defaultRel)}
        download=${ifDefined(this.download)}
        aria-label=${this.label || nothing}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `
  }

  #renderCurrent() {
    return html`
      <gds-text color="neutral-02" font-weight="regular">
        <slot></slot>
      </gds-text>
    `
  }
}
