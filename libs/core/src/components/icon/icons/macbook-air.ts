import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-macbook-air')
export class IconMacbookAir extends GdsIcon {
  static _regularSVG = `
<path d="M21.25 13.75V4.75H2.75V13.75M1.75 16.75V18.25C1.75 18.8023 2.19772 19.25 2.75 19.25H21.25C21.8023 19.25 22.25 18.8023 22.25 18.25V16.75H15.075L14.1 17.25H10L8.925 16.75H1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}