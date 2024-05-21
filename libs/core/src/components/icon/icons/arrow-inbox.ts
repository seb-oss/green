import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-arrow-inbox')
export class IconArrowInbox extends GdsIcon {
  static _regularSVG = `
<path d="M20.25 14.75V20.25H3.75V14.75M12 15V3.75M12 15L8.5 11.5M12 15L15.5 11.5" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}