import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-charging-station
 * @deprecated This icon is deprecated
 */
@gdsCustomElement('gds-icon-charging-station')
export class IconChargingStation extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M13.25 14.75V3.75H3.75V14.75M13.25 14.75V20.25H3.75V14.75M13.25 14.75H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 20.25H20.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.75 10.75V16.25H20.25V7.25L17.25 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.31469 6.91746C9.31469 6.52592 8.83448 6.35059 8.59206 6.65363L6.19283 9.65281C5.97521 9.92484 6.16445 10.3333 6.5081 10.3333H7.68526V12.0825C7.68526 12.4741 8.16548 12.6494 8.4079 12.3464L10.8071 9.34719C11.0247 9.07516 10.8355 8.66673 10.4918 8.66673H9.31469V6.91746Z" fill="currentColor"/>`
  /** @private */
  static _solidSVG = `<path d="M8.59206 6.65363C8.83448 6.35059 9.31469 6.52592 9.31469 6.91746V8.66673H10.4918C10.8355 8.66673 11.0247 9.07516 10.8071 9.34719L8.4079 12.3464C8.16547 12.6494 7.68526 12.4741 7.68526 12.0825V10.3333H6.5081C6.16445 10.3333 5.97521 9.92484 6.19283 9.65281L8.59206 6.65363Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H13.25C13.6642 3 14 3.33579 14 3.75V19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75ZM4.5 4.5V14H12.5V4.5H4.5Z" fill="currentColor"/><path d="M16.6738 4.26988C16.939 3.95167 17.4119 3.90868 17.7301 4.17385L20.7301 6.67385C20.9011 6.81635 21 7.02743 21 7.25002V16.25C21 16.6642 20.6642 17 20.25 17H16.75C16.3358 17 16 16.6642 16 16.25V10.75C16 10.3358 16.3358 10 16.75 10C17.1642 10 17.5 10.3358 17.5 10.75V15.5H19.5V7.6013L16.7699 5.32618C16.4517 5.06101 16.4087 4.58809 16.6738 4.26988Z" fill="currentColor"/>`
  /** @private */
  static _name = 'charging-station'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}