import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-invite')
export class IconInvite extends GdsIcon {
  static _regularSVG = `
<path d="M4.75 10.9853V2.75H19.25V10.9853M9.75 7.75H14.25M2.75 10.75V20.25H21.25V10.75L12 13.75L2.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = `
<path d="M4.75 10.9853V2.75H19.25V10.9853M9.75 7.75H14.25M2.75 10.75V20.25H21.25V10.75L12 13.75L2.75 10.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
}