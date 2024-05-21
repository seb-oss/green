import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-[NAME]')
export class IconName extends GdsIcon {
  static _regularSVG = `[SVG_CONTENT]`
  static _solidSVG = `[SVG_CONTENT]`
}
