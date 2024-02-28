import { LitElement, unsafeCSS } from 'lit'
import { property, query } from 'lit/decorators.js'
import { constrainSlots } from '../../utils/helpers'
import '../icon/icon'
import '../../primitives/ripple/ripple'

import { tokens } from '../../tokens.style'
import style from 'flex.style.css';


import {
  gdsCustomElement,
  html as customElementHtml,
} from '../../utils/helpers/custom-element-scoping'
import { stripWhitespace } from '../../utils/helpers/strip-white-space'
import { classMap } from 'lit/directives/class-map.js'
import { forwardAttributes } from '../../utils/directives'

// Create a customized `html` template tag that strips whitespace and applies custom element scoping.
const html = stripWhitespace(customElementHtml)

/**
 * @element gds-grid
 * @summary The grid component is a layout component that allows you to create a grid-based layout.
 * @status beta
 */

@gdsCustomElement('gds-grid')

export class GdsFlex extends LitElement {
    static styles = [tokens, unsafeCSS(style)];
    
    static shadowRootOptions: ShadowRootInit = {
        mode: 'open',
        delegatesFocus: true,
    }

    render() {
        return html`
            <div class="gds-flex">
                <slot></slot>
            </div>
        `
    }
}