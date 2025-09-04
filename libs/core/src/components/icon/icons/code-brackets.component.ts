import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-code-brackets
 */
@gdsCustomElement('gds-icon-code-brackets')
export class IconCodeBrackets extends GdsIcon {
  /** @private */
  static _regularSVG = `<g clip-path="url(#clip0_4959_203)"><path d="M9.75 20.25L14.25 3.75M18.25 7.75L22.25 12L18.25 16.25M5.75 16.25L1.75 12L5.75 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_4959_203"><rect width="24" height="24" fill="white"/></clipPath></defs>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4473 3.02637C14.847 3.13536 15.0826 3.54766 14.9736 3.94728L10.4736 20.4473C10.3646 20.8469 9.95228 21.0825 9.55266 20.9735C9.15304 20.8645 8.91744 20.4522 9.02643 20.0526L13.5264 3.55261C13.6354 3.15299 14.0477 2.91738 14.4473 3.02637ZM6.26402 7.20379C6.56565 7.48768 6.58004 7.96234 6.29615 8.26397L2.77994 12L6.29615 15.7359C6.58004 16.0375 6.56565 16.5122 6.26402 16.7961C5.9624 17.08 5.48774 17.0656 5.20385 16.764L1.20385 12.514C0.932051 12.2252 0.932049 11.7747 1.20385 11.4859L5.20385 7.23592C5.48774 6.93429 5.96239 6.91991 6.26402 7.20379ZM17.736 7.20379C18.0376 6.91991 18.5123 6.93429 18.7962 7.23592L22.7962 11.4859C23.068 11.7747 23.0679 12.2252 22.7961 12.514L18.7961 16.764C18.5123 17.0656 18.0376 17.08 17.736 16.7961C17.4343 16.5122 17.42 16.0375 17.7039 15.7359L21.2201 12L17.7038 8.26397C17.42 7.96234 17.4343 7.48768 17.736 7.20379Z" fill="currentColor"/>`
  /** @private */
  static _name = 'code-brackets'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}