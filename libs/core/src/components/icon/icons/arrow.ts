import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

@gdsCustomElement('gds-icon-arrow')
export class IconArrow extends GdsIcon {
  static _regularSVG = `<path d="M21 12.75H12M12 12.75H3M12 12.75L12.0022 15.25M8.0022 7.75V4.75C8.0022 4.19772 8.44991 3.75 9.0022 3.75H15.0022C15.5545 3.75 16.0022 4.19772 16.0022 4.75V7.75M20.25 20.25H3.75C3.19772 20.25 2.75 19.8023 2.75 19.25V8.75C2.75 8.19772 3.19772 7.75 3.75 7.75H20.25C20.8023 7.75 21.25 8.19772 21.25 8.75V19.25C21.25 19.8023 20.8023 20.25 20.25 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  `
  static _solidSVG = `<path d="M21 12.75H12M12 12.75H3M12 12.75L12.0022 15.25M8.0022 7.75V4.75C8.0022 4.19772 8.44991 3.75 9.0022 3.75H15.0022C15.5545 3.75 16.0022 4.19772 16.0022 4.75V7.75M20.25 20.25H3.75C3.19772 20.25 2.75 19.8023 2.75 19.25V8.75C2.75 8.19772 3.19772 7.75 3.75 7.75H20.25C20.8023 7.75 21.25 8.19772 21.25 8.75V19.25C21.25 19.8023 20.8023 20.25 20.25 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
}
