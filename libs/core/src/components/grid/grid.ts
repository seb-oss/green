import { css, CSSResult, LitElement, unsafeCSS } from 'lit'
import type { CSSResultGroup } from 'lit'

import { property, state } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import { watch } from '../../utils/decorators'

import { tokens } from '../../tokens.style'
import GridCSS from './grid.style.css'
// const gridCSS = unsafeCSS(grid)

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
   * @property {string} gap - Defines the gap size between grid items. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid gap="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid gap="l:m m:s s:xs"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'gap', type: String })
  gap?: GridSizes

  /**
   * @property {string} padding - Defines the padding size around the grid. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid padding="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid padding="l:m m:s s:xs"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'padding', type: String })
  padding?: GridSizes

  /**
   * @property {string} auto-columns - Defines the minimum column width in pixels. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. If set, the grid adjusts column size based on content and available width, even without other attributes.
   * @example
   * ```html
   * <gds-grid auto-columns="200"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid auto-columns="l:200 m:100 s:80"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'auto-columns', type: String })
  autoColumns?: GridSizes

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * It updates the column, gap, and padding variables.
   */
  connectedCallback() {
    super.connectedCallback()
    this._updateColumnVariables()
    this._updateGapVariables()
    this._updatePaddingVariables()
    this._updateAutoColumnsVariables()
  }

  /**
   * State variable that holds the CSS variables for column, gap, and padding.
   */
  @state()
  private _gridVariables = {
    varsColumn: css``,
    varsGap: css``,
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
   * Watcher for the 'gap' property.
   * It updates the gap CSS variables when the 'gap' property changes.
   */
  @watch('gap')
  private _updateGapVariables() {
    const match = this.gap?.match(BreakpointPattern)
    let gapDesktop, gapTablet, gapMobile

    if (this.gap && !this.gap.includes(' ')) {
      // If gap is a single value, use it for all screen sizes
      gapDesktop = gapTablet = gapMobile = `var(--gds-sys-grid-gap-${this.gap})`
    } else {
      const { l, m, s } = match?.groups || {}
      gapDesktop = l ? `var(--gds-sys-grid-gap-${l.split(':')[1]})` : undefined
      gapTablet = m ? `var(--gds-sys-grid-gap-${m.split(':')[1]})` : undefined
      gapMobile = s ? `var(--gds-sys-grid-gap-${s.split(':')[1]})` : undefined
    }

    const gapProperties = [
      { name: '_gap-desktop', value: gapDesktop },
      { name: '_gap-tablet', value: gapTablet },
      { name: '_gap-mobile', value: gapMobile },
    ]

    const cssVariables = gapProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      varsGap: css`
        ${unsafeCSS(cssVariables)}
      `,
    }

    this.requestUpdate('_gridVariables')
  }

  /**
   * Watcher for the 'padding' property.
   * It updates the padding CSS variables when the 'padding' property changes.
   */
  @watch('padding')
  private _updatePaddingVariables() {
    const match = this.padding?.match(BreakpointPattern)
    let paddingDesktop, paddingTablet, paddingMobile

    if (this.padding && !this.padding.includes(' ')) {
      // If padding is a single value, use it for all screen sizes
      paddingDesktop =
        paddingTablet =
        paddingMobile =
          `var(--gds-sys-grid-gap-${this.gap})`
    } else {
      const { l, m, s } = match?.groups || {}
      paddingDesktop = l
        ? `var(--gds-sys-grid-gap-${l.split(':')[1]})`
        : undefined
      paddingTablet = m
        ? `var(--gds-sys-grid-gap-${m.split(':')[1]})`
        : undefined
      paddingMobile = s
        ? `var(--gds-sys-grid-gap-${s.split(':')[1]})`
        : undefined
    }

    const paddingProperties = [
      { name: '_padding-desktop', value: paddingDesktop },
      { name: '_padding-tablet', value: paddingTablet },
      { name: '_padding-mobile', value: paddingMobile },
    ]

    const cssVariables = paddingProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      varsPadding: css`
        ${unsafeCSS(cssVariables)}
      `,
    }
    this.requestUpdate('_gridVariables')
  }

  /**
   * Watcher for the 'autoColumns' property.
   * It updates the min-width for each column on a "--_col-width" variable.
   */
  @watch('autoColumns')
  private _updateAutoColumnsVariables() {
    const match = this.autoColumns?.match(BreakpointPattern)
    let widthDesktop, widthTablet, widthMobile

    if (this.autoColumns && !this.autoColumns.includes(' ')) {
      // If width is a single value, use it for all screen sizes
      widthDesktop = widthTablet = widthMobile = `${this.autoColumns}px`
    } else {
      const { l, m, s } = match?.groups || {}
      widthDesktop = l ? `${l.split(':')[1]}px` : undefined
      widthTablet = m ? `${m.split(':')[1]}px` : undefined
      widthMobile = s ? `${s.split(':')[1]}px` : undefined
    }

    const widthProperties = [
      { name: '_col-width-mobile', value: widthMobile },
      { name: '_col-width-tablet', value: widthTablet },
      { name: '_col-width-desktop', value: widthDesktop },
    ]

    const cssVariables = widthProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      varsAutoColumns: css`
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
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`:host {${Object.values(this._gridVariables).join('')}} `)

    if (this.shadowRoot) {
      const styles = Array.isArray(GdsGrid.styles)
        ? GdsGrid.styles
        : [GdsGrid.styles]
      const styleSheets = styles.flatMap((style) => {
        if (Array.isArray(style)) {
          return style.map((s) => {
            const newSheet = new CSSStyleSheet()
            newSheet.replaceSync(s.cssText)
            return newSheet
          })
        } else {
          const newSheet = new CSSStyleSheet()
          newSheet.replaceSync(style.cssText)
          return [newSheet]
        }
      })
      this.shadowRoot.adoptedStyleSheets = [sheet, ...styleSheets]
    }
  }

  render() {
    return html` <slot></slot> `
  }
}
