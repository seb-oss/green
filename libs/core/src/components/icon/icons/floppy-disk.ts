import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-floppy-disk
 */
@gdsCustomElement('gds-icon-floppy-disk')
export class IconFloppyDisk extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M8.75 4V8.25H15.25V4M3.75 3.75V20.25H20.25V6.75L17.25 3.75H3.75ZM15.25 14.25C15.25 16.0449 13.7949 17.5 12 17.5C10.2051 17.5 8.75 16.0449 8.75 14.25C8.75 12.4551 10.2051 11 12 11C13.7949 11 15.25 12.4551 15.25 14.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M9.5 14.25C9.5 12.8693 10.6193 11.75 12 11.75C13.3807 11.75 14.5 12.8693 14.5 14.25C14.5 15.6307 13.3807 16.75 12 16.75C10.6193 16.75 9.5 15.6307 9.5 14.25Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3H8V8.25C8 8.66421 8.33579 9 8.75 9H15.25C15.6642 9 16 8.66421 16 8.25V3H17.25C17.4489 3 17.6397 3.07902 17.7803 3.21967L20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75C3 3.33579 3.33579 3 3.75 3ZM12 10.25C9.79086 10.25 8 12.0409 8 14.25C8 16.4591 9.79086 18.25 12 18.25C14.2091 18.25 16 16.4591 16 14.25C16 12.0409 14.2091 10.25 12 10.25Z" fill="currentColor"/><path d="M9.5 3H14.5V7.5H9.5V3Z" fill="currentColor"/>`
  /** @private */
  static _name = 'floppy-disk'
}
