import { css, LitElement, unsafeCSS } from 'lit'

import { property, state } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { DynamicStylesController } from '../../dynamic-styles'

import { watch } from '../../utils/decorators/watch'

import { tokens } from '../../tokens.style'
import GridCSS from './grid.style.css'

type GridSizes = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'
const BreakpointPattern =
  /(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/

/**
 * @element gds-grid
 * The `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute.
 *
 * @status beta
 *
 */

@gdsCustomElement('gds-grid')
export class GdsGrid extends LitElement {
  #Controller: DynamicStylesController

  constructor() {
    super()
    this.#Controller = new DynamicStylesController(this)
  }

  static styles = [tokens, GridCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * @property {string} columns - The number of columns for the grid. This can be a single value that applies to all breakpoints, or a string of three space-separated tokens in the format "l:desktop m:tablet s:mobile", each token specifying the number of columns for that device type respectively.
   * @example
   * ```html
   * <gds-grid columns="2"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid columns="l:8 m:4 s:2"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'columns', type: String })
  columns?: string | undefined

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * It updates the column, gap, and padding variables.
   */
  connectedCallback() {
    super.connectedCallback()
    this._updateColumnVariables()
  }

  /**
   * State variable that holds the CSS variables for column, gap, and padding.
   */
  @state()
  private _gridVariables = {
    varsColumn: css``,
    varsGap: css``,
    varsRowGap: css``,
    varsPadding: css``,
    varsAutoColumns: css``,
  }

  /**
   * Watcher for the 'columns' property.
   * It updates the column CSS variables when the 'columns' property changes.
   */
  @watch('columns')
  private _updateColumnVariables() {
    const match = this.columns?.match(BreakpointPattern)
    let columnsDesktop, columnsTablet, columnsMobile

    if (this.columns && !isNaN(Number(this.columns))) {
      // If columns is a single number, use it for all screen sizes
      columnsDesktop = columnsTablet = columnsMobile = Number(this.columns)
    } else {
      const { l, m, s } = match?.groups || {}
      columnsDesktop = l ? Number(l.split(':')[1]) : undefined
      columnsTablet = m ? Number(m.split(':')[1]) : undefined
      columnsMobile = s ? Number(s.split(':')[1]) : undefined
    }

    const columnProperties = [
      { name: '_columns-desktop', value: columnsDesktop },
      { name: '_columns-tablet', value: columnsTablet },
      { name: '_columns-mobile', value: columnsMobile },
    ]

    const cssVariables = columnProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      varsColumn: css`
        ${unsafeCSS(cssVariables)}
      `,
    }

    this.requestUpdate('_gridVariables')
  }

  /**
   * Watcher for the '_gridVariables' property.
   * It updates the CSS stylesheet when the '_gridVariables' property changes.
   */
  @watch('_gridVariables')
  private _updateGridCss() {
    const cssVariables = `:host {${Object.values(this._gridVariables).join('')}} `

    if (
      typeof CSSStyleSheet !== 'undefined' &&
      typeof CSSStyleSheet.prototype.replaceSync === 'function'
    ) {
      // If CSSStyleSheet is supported
      const sheet = new CSSStyleSheet()
      sheet.replaceSync(cssVariables)
      this.shadowRoot?.adoptedStyleSheets?.push(sheet)

      // this.#Controller.inject(css`
      //   :host {
      //     --INJECTED: teal;
      //   }
      // `)
      // this.#Controller.appendStyles()
    } else {
      // If CSSStyleSheet is not supported, use DynamicStylesController
      this.#Controller.inject(css`
        :host {
          --INJECTED: teal;
        }
      `)
      this.#Controller.appendStyles()
    }

    this.#Controller.setCSSVar('--CUSTOM', 'red')
  }

  render() {
    return html`<slot></slot>`
  }
}
