import { css, unsafeCSS } from 'lit'

import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators/watch'
import { tokens } from '../../tokens.style'

import CardCSS from './card.style.css'

type CardSizes = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'

const BreakpointPattern =
  /(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/

type CSSProperty = {
  name: string
  value: string | number | undefined
}

@gdsCustomElement('gds-card')
export class GdsCard extends GdsElement {
  static styles = [tokens, CardCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * @property {string} `gap` - Defines the gap size between grid items. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-card gap="m"></gds-card> <!-- applies to all breakpoints -->
   * <gds-card gap="l:m m:s s:xs"></gds-card> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'gap', type: String })
  gap?: CardSizes

  /**
   * @property {string} `row-gap` - Defines the gap size between grid items in vertical axis. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-card row-gap="m"></gds-card> <!-- applies to all breakpoints -->
   * <gds-card row-gap="l:m m:s s:xs"></gds-card> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'row-gap', type: String })
  rowGap?: CardSizes

  /**
   * @property {string} padding - Defines the padding size around the grid. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-card padding="m"></gds-card> <!-- applies to all breakpoints -->
   * <gds-card padding="l:m m:s s:xs"></gds-card> <!-- different values for each breakpoint -->
   * ```
   */
  @property({ attribute: 'padding', type: String })
  padding?: CardSizes

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

  render() {
    return html`<slot></slot>`
  }
}
