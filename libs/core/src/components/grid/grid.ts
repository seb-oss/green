import { css, unsafeCSS } from 'lit'

import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators/watch'
import { tokens } from '../../tokens.style'

import GridCSS from './grid.style.css'

type GridSizes = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'

const BreakpointPattern =
  /(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/

type CSSProperty = {
  name: string
  value: string | number | undefined
}

/**
 * @element gds-grid
 * The `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute.
 *
 * @status beta
 *
 */
@gdsCustomElement('gds-grid')
export class GdsGrid extends GdsElement {
  static styles = [tokens, GridCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * The number of columns for the grid. This can be a single value that applies to all breakpoints, or a string of three space-separated tokens in the format "l:desktop m:tablet s:mobile", each token specifying the number of columns for that device type respectively.
   * @example
   * ```html
   * <gds-grid columns="2"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid columns="l:8 m:4 s:2"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'columns', type: String })
  columns?: string

  /**
   * Defines the gap size between grid items. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid gap="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid gap="l:m m:s s:xs"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'gap', type: String })
  gap?: GridSizes

  /**
   * Defines the gap size between grid items in vertical axis. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid row-gap="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid row-gap="l:m m:s s:xs"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'row-gap', type: String })
  rowGap?: GridSizes

  /**
   * Defines the padding size around the grid. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid padding="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid padding="l:m m:s s:xs"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'padding', type: String })
  padding?: GridSizes

  /**
   * Defines the minimum column width in pixels. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. If set, the grid adjusts column size based on content and available width, even without other attributes.
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
    this._updateRowGapVariables()
    this._updatePaddingVariables()
    this._updateAutoColumnsVariables()
  }

  private _updateCSSVariables(
    propertyName: string,
    propertyPrefix: string,
  ): void {
    let propertyValue: string | undefined

    if (propertyName in this) {
      propertyValue = this[propertyName as keyof this] as string | undefined
    }

    const match: RegExpMatchArray | null =
      propertyValue?.match(BreakpointPattern) || null

    let desktop: string | number | undefined
    let tablet: string | number | undefined
    let mobile: string | number | undefined

    const { l, m, s } = match?.groups || {}

    const processBreakpoints = (l?: string, m?: string, s?: string) => {
      const desktop = l
        ? `var(--gds-sys-grid-gap-${l.split(':')[1]})`
        : undefined
      const tablet = m
        ? `var(--gds-sys-grid-gap-${m.split(':')[1]})`
        : undefined
      const mobile = s
        ? `var(--gds-sys-grid-gap-${s.split(':')[1]})`
        : undefined

      return { desktop, tablet, mobile }
    }

    if (propertyName === 'columns') {
      if (this.columns && !isNaN(Number(this.columns))) {
        desktop = tablet = mobile = Number(this.columns)
      } else {
        desktop = l ? l.split(':')[1] : undefined
        tablet = m ? m.split(':')[1] : undefined
        mobile = s ? s.split(':')[1] : undefined
      }
    }

    if (propertyName === 'gap') {
      if (this.gap && !this.gap.includes(' ')) {
        desktop = tablet = mobile = `var(--gds-sys-grid-gap-${this.gap})`
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'rowGap') {
      if (this.rowGap && !this.rowGap.includes(' ')) {
        desktop = tablet = mobile = `var(--gds-sys-grid-gap-${this.rowGap})`
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'padding') {
      if (this.padding && !this.padding.includes(' ')) {
        desktop = tablet = mobile = `var(--gds-sys-grid-gap-${this.padding})`
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'auto-columns') {
      if (this.autoColumns && !this.autoColumns.includes(' ')) {
        desktop = tablet = mobile = `${this.autoColumns}px`
      } else {
        desktop = l ? `${l.split(':')[1]}px` : undefined
        tablet = m ? `${m.split(':')[1]}px` : undefined
        mobile = s ? `${s.split(':')[1]}px` : undefined
      }
    }

    const properties: CSSProperty[] = [
      { name: `${propertyPrefix}-desktop`, value: desktop },
      { name: `${propertyPrefix}-tablet`, value: tablet },
      { name: `${propertyPrefix}-mobile`, value: mobile },
    ]

    const cssVariables: string = properties
      .filter(({ value }) => value !== undefined)
      .map(({ name, value }) => `--_${name}: ${value};`)
      .join(' ')

    this.#gridVariables = {
      ...this.#gridVariables,
      [propertyPrefix]: css`
        ${unsafeCSS(cssVariables)}
      `,
    }

    // inject final CSS
    this._dynamicStylesController.inject(
      'grid-vars',
      css`
        :host {
          ${unsafeCSS(Object.values(this.#gridVariables).join(''))}
        }
      `,
    )
  }

  /**
   * State variable that holds the CSS variables for column, gap, and padding.
   */
  #gridVariables = {
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
    this._updateCSSVariables('columns', 'columns')
  }

  /**
   * Watcher for the 'gap' property.
   * It updates the gap CSS variables when the 'gap' property changes.
   */
  @watch('gap')
  private _updateGapVariables() {
    this._updateCSSVariables('gap', 'gap')
  }

  /**
   * Watcher for the 'row-gap' property.
   * It updates the row-gap CSS variables when the 'row-gap' property changes.
   */
  @watch('row-gap')
  private _updateRowGapVariables() {
    this._updateCSSVariables('rowGap', 'row-gap')
  }

  /**
   * Watcher for the 'padding' property.
   * It updates the padding CSS variables when the 'padding' property changes.
   */
  @watch('padding')
  private _updatePaddingVariables() {
    this._updateCSSVariables('padding', 'padding')
  }

  /**
   * Watcher for the 'autoColumns' property.
   * It updates the min-width for each column on a "--_col-width" variable.
   */
  @watch('autoColumns')
  private _updateAutoColumnsVariables() {
    this._updateCSSVariables('auto-columns', 'col-width')
  }

  render() {
    return html`<slot></slot>`
  }
}
