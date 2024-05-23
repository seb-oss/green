import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-bubble')
export class IconBubble extends GdsIcon {
  static _regularSVG = `<path d="M2.7522 3.75H21.2522V18.25H12.0022L7.0022 21V18.25H2.7522V3.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>`
  static _solidSVG = `<path d="M21.252 3C21.6662 3 22.002 3.33579 22.002 3.75V18.25C22.002 18.6642 21.6662 19 21.252 19H12.1946L7.36339 21.6572C7.13105 21.785 6.84849 21.7806 6.62023 21.6456C6.39198 21.5106 6.25195 21.2652 6.25195 21V19H2.75195C2.33774 19 2.00195 18.6642 2.00195 18.25V3.75C2.00195 3.33579 2.33774 3 2.75195 3H21.252Z" fill="currentColor"/>`
}