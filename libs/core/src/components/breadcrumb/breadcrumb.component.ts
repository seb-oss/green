import { html } from 'lit'

import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsFlex } from '../flex/'

@gdsCustomElement('gds-breadcrumb')
export class GdsBreadcrumb extends GdsFlex {
  constructor() {
    super()
    this['align-items'] = 'center'
    this.gap = '2xs'
  }

  render() {
    return html`<slot></slot>`
  }
}
