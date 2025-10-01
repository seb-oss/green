import { localized } from '@lit/localize'
import { nothing } from 'lit'
import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../../gds-element'
import { forwardAttributes } from '../../../utils/directives'
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

  render() {
    return html` <li aria-current=${ifDefined(!this.href ? 'page' : undefined)}>
      ${when(
        this.href,
        () => html`
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
          <span class="separator" aria-hidden="true">/</span>
        `,
        () => html`
          <gds-text color="neutral-02" font-weight="regular">
            <slot></slot>
          </gds-text>
        `,
      )}
    </li>`
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }
}
