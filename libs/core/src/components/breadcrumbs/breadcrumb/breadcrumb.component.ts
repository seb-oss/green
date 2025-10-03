import { localized } from '@lit/localize'
import { nothing } from 'lit'
import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { GdsLink } from '../../link/link.component'
import { GdsText } from '../../text/text.component'
import BreadcrumbStyles from './breadcrumb.styles'

/**
 * @element gds-breadcrumb
 * @summary The `gds-breadcrumb` component represents a single item within a breadcrumb navigation.
 * It can be rendered as a link, current page indicator, or overflow menu depending on its properties.
 *
 * @slot - Default slot for the breadcrumb content
 * @slot lead - Optional slot for leading content (usually icons)
 * @slot trail - Optional slot for trailing content
 */

@gdsCustomElement('gds-breadcrumb', {
  dependsOn: [GdsLink, GdsText],
})
@localized()
export class GdsBreadcrumb extends GdsElement {
  static styles = [BreadcrumbStyles]

  /**
   * The URL that the breadcrumb item points to.
   */
  @property()
  href = ''

  /**
   * Where to display the linked breadcrumb URL. Only used when href is present.
   */
  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  /**
   * The relationship of the linked breadcrumb URL. Defaults to "noreferrer noopener" when target is "_blank".
   */
  @property()
  rel?: string

  /**
   * Accessible label for the breadcrumb item. Use when visual text needs a different description.
   */
  @property()
  label = ''

  /**
   * Causes the browser to treat the linked breadcrumb URL as a download. Can be used with or without a value.
   */
  @property()
  download?: string

  /**
   * When true, the breadcrumb item will render as an overflow menu instead of a regular link.
   */
  @property({ type: Boolean, reflect: true })
  overflow = false

  render() {
    return html`
      <div
        role="listitem"
        class="list-item"
        aria-current=${ifDefined(!this.href ? 'page' : undefined)}
      >
        ${this.#renderContents()}
      </div>
    `
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }

  #renderContents() {
    const elements = [this.#renderMainContent()]
    return elements.map((element) => html`${element}`)
  }

  #renderMainContent() {
    if (this.overflow) return this.#renderOverflowMenu()
    if (this.href) return this.#renderItem()
    return this.#renderCurrent()
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
