import { html } from 'lit'
import { query } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import RippleStyles from './ripple.styles'

@gdsCustomElement('gds-ripple')
export class GdsRipple extends GdsElement {
  static styles = [tokens, RippleStyles]

  @query('div') private _rippleEl?: HTMLDivElement

  render() {
    return html`<div></div>`
  }

  onmousedown = (e: MouseEvent) => {
    this.triggerRipple(e.clientX, e.clientY);
  }

  triggerRipple(x?: number, y?: number) {
    const rippleEl = this._rippleEl;
    const rect = this.getBoundingClientRect();

    // Default to center if no coordinates provided
    const rippleX = x !== undefined ? x - rect.left : rect.width / 2;
    const rippleY = y !== undefined ? y - rect.top : rect.height / 2;

    if (rippleEl) {
      rippleEl.classList.remove('gds-ripple-effect');
      this.style.setProperty('--gds-ripple-top', `${rippleY}px`);
      this.style.setProperty('--gds-ripple-left', `${rippleX}px`);
      setTimeout(() => {
        rippleEl.classList.add('gds-ripple-effect');
      }, 20);
    }
  }
}
