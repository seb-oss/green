import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-bubble-text')
export class IconBubbleText extends GdsIcon {
  static _regularSVG = `
<path d="M15.25 9H8.75M15.25 13H8.75M3.75 3.75H20.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H3.75V3.75Z" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M15.25 9H8.75M15.25 13H8.75M3.75 3.75H20.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H3.75V3.75Z" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
}