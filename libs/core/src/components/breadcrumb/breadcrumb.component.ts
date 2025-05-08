import { html } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsFlex } from '../flex/'

import '../icon/icons/chevron-right'

/**
 * @element gds-breadcrumb
 * @summary A breadcrumb navigation component that helps users understand their location in a website or application.
 *
 * @slot - The default slot for breadcrumb items
 * @slot separator - An optional slot for the separator between items
 */

class BreadCrumb extends GdsFlex {
  /**
   * The ARIA label for the breadcrumb. Defaults to "Breadcrumb"
   */
  @property({ type: String })
  label = 'Breadcrumb'

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'navigation')
    this.setAttribute('aria-label', this.label)
  }

  constructor() {
    super()
    this['align-items'] = 'center'
    this.gap = '2xs'
  }

  render() {
    return html`
      <gds-link href="/" aria-label="Home">
        <gds-icon-home-open slot="lead"></gds-icon-home-open>
      </gds-link>
      <span>/</span>
      <gds-link href="/components" aria-label="Home"> Components </gds-link>
      <span>/</span>
      <gds-link href="/components/button" aria-label="button">
        Button
      </gds-link>
    `
  }
}

@gdsCustomElement('gds-breadcrumb')
export class GdsBreadcrumb extends withSizeXProps(
  withMarginProps(withLayoutChildProps(BreadCrumb)),
) {}
