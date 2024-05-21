import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-pencil-wave')
export class IconPencilWave extends GdsIcon {
  static _regularSVG = `
<path d="M21 18C21 18 19.666 19.5444 18.166 19.5444C16.666 19.5444 15.4594 18.115 13.9866 18.115C12.5138 18.115 11.6598 18.786 10.75 19.75M17 2.75L20.25 6L6 20.25H2.75V17L17 2.75Z" stroke="#353531" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}