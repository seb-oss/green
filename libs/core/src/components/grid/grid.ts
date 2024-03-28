import { css, CSSResult, LitElement, unsafeCSS } from 'lit'
import type { CSSResultGroup } from 'lit'

import { property, state } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import { watch } from '../../utils/decorators'

import { tokens } from '../../tokens.style'
import grid from './grid.style.css'
const gridCSS = unsafeCSS(grid)

type GridSizes = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'
type GridGap = GridSizes
type GridPadding = GridSizes

/**
 * @element gds-grid
 * The `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `fluid` attribute.
 *
 * @status beta
 *
 */

@gdsCustomElement('gds-grid')
export class GdsGrid extends LitElement {
  static styles = [tokens, gridCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * @property {string} columns - The number of columns for the grid. This can be a space-separated string of three numbers, specifying the number of columns for desktop, tablet, and mobile devices, respectively.
   * @example
   * ```html
   * <gds-grid columns="3 2 1"></gds-grid>
   * ```
   */
  @property({ attribute: 'columns', type: String })
  columns?: string | undefined

  /**
   * @property {string} gap - The size of the gap between grid items. This can be a space-separated string of three sizes ('none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'), specifying the gap size for desktop, tablet, and mobile devices, respectively.
   * @example
   * ```html
   * <gds-grid gap="m s xs"></gds-grid>
   * ```
   */
  @property({ attribute: 'gap', type: String })
  gap?: GridGap

  /**
   * @property {string} padding - The size of the padding around the grid. This can be a space-separated string of three sizes ('none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'), specifying the padding size for desktop, tablet, and mobile devices, respectively.
   * @example
   * ```html
   * <gds-grid padding="l m s"></gds-grid>
   * ```
   */
  @property({ attribute: 'padding', type: String })
  padding?: GridPadding

  /**
   * @property {boolean} fluid - A boolean indicating whether the grid should be fluid. If true, the grid will automatically adjust the column size based on the content.
   * @example
   * ```html
   * <gds-grid fluid></gds-grid>
   * ```
   */
  @property({ attribute: 'fluid', type: String })
  fluid?: boolean

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * It updates the column, gap, and padding variables.
   */
  connectedCallback() {
    super.connectedCallback()
    this._updateColumnVariables()
    this._updateGapVariables()
    this._updatePaddingVariables()
  }

  /**
   * State variable that holds the CSS variables for column, gap, and padding.
   */
  @state()
  private _gridVariables = {
    column: css``,
    gap: css``,
    padding: css``,
  }

  /**
   * Watcher for the 'columns' property.
   * It updates the column CSS variables when the 'columns' property changes.
   */
  @watch('columns')
  private _updateColumnVariables() {
    const [columnsDesktop, columnsTablet, columnsMobile] =
      this.columns?.split(' ').map(Number) || []

    const columnProperties = [
      { name: '_columns-mobile', value: columnsMobile },
      { name: '_columns-tablet', value: columnsTablet },
      { name: '_columns-desktop', value: columnsDesktop },
    ]

    const cssVariables = columnProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      column: css`
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
    const [gapDesktop, gapTablet, gapMobile] =
      this.gap?.split(' ').map((val) => val || '0') || []

    const columnProperties = [
      { name: '_gap-mobile', value: `var(--gds-sys-grid-gap-${gapMobile})` },
      { name: '_gap-tablet', value: `var(--gds-sys-grid-gap-${gapTablet})` },
      { name: '_gap-desktop', value: `var(--gds-sys-grid-gap-${gapDesktop})` },
    ]

    const cssVariables = columnProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      gap: css`
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
    const [paddingDesktop, paddingTablet, paddingMobile] =
      this.padding?.split(' ').map((val) => val || '0') || []

    const paddingProperties = [
      {
        name: '_padding-mobile',
        value: `var(--gds-sys-grid-gap-${paddingMobile})`,
      },
      {
        name: '_padding-tablet',
        value: `var(--gds-sys-grid-gap-${paddingTablet})`,
      },
      {
        name: '_padding-desktop',
        value: `var(--gds-sys-grid-gap-${paddingDesktop})`,
      },
    ]

    const cssVariables = paddingProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      padding: css`
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
