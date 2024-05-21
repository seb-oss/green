import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-credit-card')
export class IconCreditCard extends GdsIcon {
  static _regularSVG = `
<path d="M2.75 9.75005V19.2461H21.2461V9.75005M2.75 9.75005V4.75293H21.2422C21.247 6.41863 21.2461 8.08434 21.2461 9.75005M2.75 9.75005H21.2461M6.75 13.25H9.75" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}