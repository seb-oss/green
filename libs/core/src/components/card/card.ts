import { css, CSSResult, LitElement, unsafeCSS } from 'lit'
import type { CSSResultGroup } from 'lit'

import { property, state } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import { watch } from '../../utils/decorators'

import { tokens } from '../../tokens.style'
import CardCSS from './card.style.css'

type GridSizes = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'
const BreakpointPattern =
  /(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/

/**
 * @element gds-card
 * The `gds-card`
 *
 * @status beta
 *
 */

@gdsCustomElement('gds-card')
export class GdsCard extends LitElement {
  static styles = [tokens, CardCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * @property {string} `gap` - Defines the gap size between grid items. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid gap="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid gap="l:m m:s s:xs"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'gap', type: String })
  gap?: GridSizes

  /**
   * @property {string} `row-gap` - Defines the gap size between grid items in vertical axis. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid row-gap="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid row-gap="l:m m:s s:xs"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'row-gap', type: String })
  rowGap?: GridSizes

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
   * Lifecycle method called when the element is connected to the DOM.
   * It updates the column, gap, and padding variables.
   */
  connectedCallback() {
    super.connectedCallback()
    this._updateGapVariables()
    this._updateRowGapVariables()
    this._updatePaddingVariables()
  }

  /**
   * State variable that holds the CSS variables for column, gap, and padding.
   */
  @state()
  private _gridVariables = {
    varsGap: css``,
    varsRowGap: css``,
    varsPadding: css``,
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
   * Watcher for the 'row-gap' property.
   * It updates the row-gap CSS variables when the 'row-gap' property changes.
   */
  @watch('row-gap')
  private _updateRowGapVariables() {
    const match = this.rowGap?.match(BreakpointPattern)
    let rowGapDesktop, rowGapTablet, rowGapMobile

    if (this.rowGap && !this.rowGap.includes(' ')) {
      // If gap is a single value, use it for all screen sizes
      rowGapDesktop =
        rowGapTablet =
        rowGapMobile =
          `var(--gds-sys-grid-gap-${this.rowGap})`
    } else {
      const { l, m, s } = match?.groups || {}
      rowGapDesktop = l
        ? `var(--gds-sys-grid-gap-${l.split(':')[1]})`
        : undefined
      rowGapTablet = m
        ? `var(--gds-sys-grid-gap-${m.split(':')[1]})`
        : undefined
      rowGapMobile = s
        ? `var(--gds-sys-grid-gap-${s.split(':')[1]})`
        : undefined
    }

    const gapProperties = [
      { name: '_row-gap-desktop', value: rowGapDesktop },
      { name: '_row-gap-tablet', value: rowGapTablet },
      { name: '_row-gap-mobile', value: rowGapMobile },
    ]

    const cssVariables = gapProperties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--${name}: ${value};`)
      .join(' ')

    this._gridVariables = {
      ...this._gridVariables,
      varsRowGap: css`
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
   * Watcher for the '_gridVariables' property.
   * It updates the CSS stylesheet when the '_gridVariables' property changes.
   */
  @watch('_gridVariables')
  private _updateCardCSS() {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`:host {${Object.values(this._gridVariables).join('')}} `)

    if (this.shadowRoot) {
      const styles = Array.isArray(GdsCard.styles)
        ? GdsCard.styles
        : [GdsCard.styles]
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
