import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-trending-two
 */
@gdsCustomElement('gds-icon-trending-two')
export class IconTrendingTwo extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M19.2188 10.9688L17.1562 8.90625L12 14.0625L9.42188 11.4844L3.75 17.1562M3.75 3.75V17.1562M20.25 20.25H3.75V17.1562" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V15.3456L8.89154 10.954C9.18444 10.6612 9.65931 10.6612 9.95221 10.954L12 13.0018L16.6259 8.37592C16.9188 8.08303 17.3937 8.08303 17.6866 8.37592L19.7491 10.4384C20.042 10.7313 20.042 11.2062 19.7491 11.4991C19.4562 11.792 18.9813 11.792 18.6884 11.4991L17.1562 9.96691L12.5303 14.5928C12.2374 14.8857 11.7626 14.8857 11.4697 14.5928L9.42188 12.545L4.5 17.4669V19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V3.75C3 3.33579 3.33579 3 3.75 3Z" fill="currentColor"/>`
  /** @private */
  static _name = 'trending-two'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}