import { localized } from '@lit/localize'
import { nothing } from 'lit'
import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'

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
export class GdsBreadcrumbsItem extends GdsLink {
  static styles = [BreadcrumbsItemStyles]
  @property({ type: Boolean, reflect: true })
  current = false

  render() {
    return html` <li
      role="listitem"
      aria-current=${ifDefined(this.current ? 'page' : undefined)}
    >
      ${when(
        this.href,
        () => html`
          <gds-link
            ${forwardAttributes(
              (attr) =>
                attr.name.startsWith('gds-') ||
                ['href', 'target', 'rel', 'download', 'label'].includes(
                  attr.name,
                ),
            )}
          >
            <slot name="lead"></slot>
            <slot></slot>
            <gds-icon-chevron-right
              size="s"
              slot="trail"
            ></gds-icon-chevron-right>
          </gds-link>
        `,
        () => html`
          <gds-text color="neutral-02">
            <slot></slot>
          </gds-text>
        `,
      )}
    </li>`
  }
}
