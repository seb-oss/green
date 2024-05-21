import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-barcode')
export class IconBarcode extends GdsIcon {
  static _regularSVG = `
<path d="M7.25 4.75H2.75V9.25M16.75 4.75H21.25V9.25M21.25 14.75V19.25H16.75M7.25 19.25H2.75V14.75M7.75 9.75V14.25M16.25 9.75V14.25M12 9.75V12.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

`
  static _solidSVG = ``
}