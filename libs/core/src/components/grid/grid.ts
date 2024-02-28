import { LitElement, unsafeCSS } from 'lit'
import { property, query } from 'lit/decorators.js'
import { constrainSlots } from '../../utils/helpers'
import '../icon/icon'
import '../../primitives/ripple/ripple'

import { tokens } from '../../tokens.style'
import style from './style/grid.css';
import align from './style/align.css';
import debug from './style/debug.css';
import grid from './style/grid.css';
import responsive from './style/responsive.css';
import space from './style/space.css';
import span from './style/span.css';

const alignCSS = unsafeCSS(align);
const debugCSS = unsafeCSS(debug);
const gridCSS = unsafeCSS(grid);
const responsiveCSS = unsafeCSS(responsive);
const spaceCSS = unsafeCSS(space);
const spanCSS = unsafeCSS(span);

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

export class GdsGrid extends LitElement {
    static styles = [tokens, alignCSS, gridCSS, spaceCSS, spanCSS, debugCSS, responsiveCSS];
    
    static shadowRootOptions: ShadowRootInit = {
        mode: 'closed',
        delegatesFocus: true,
    }

    render() {
        return html`
            <div class="gds-grid" columns="3">
                <slot></slot>
            </div>
        `
    }
}