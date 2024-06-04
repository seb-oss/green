import { css, unsafeCSS } from 'lit'

import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators/watch'
import { tokens } from '../../tokens.style'

import CardCSS from './container.style.css'

const BreakpointPattern =
  /(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/

type CSSProperty = {
  name: string
  value: string | number | undefined
}

@gdsCustomElement('gds-container')
export class GdsCard extends GdsElement {
  static styles = [tokens, CardCSS]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ attribute: 'gap', type: String })
  gap?: string

  @property({ attribute: 'row-gap', type: String })
  rowGap?: string

  @property({ attribute: 'span', type: String })
  span?: string

  @property({ attribute: 'rows', type: String })
  rows?: string

  @property({ attribute: 'padding', type: String })
  padding?: string

  @property({ attribute: 'display', type: String })
  display?: string

  @property({ attribute: 'align', type: String })
  align?: string

  @property({ attribute: 'justify', type: String })
  justify?: string

  @property({ attribute: 'direction', type: String })
  direction?: string

  @property({ attribute: 'wrap', type: String })
  wrap?: string

  connectedCallback() {
    super.connectedCallback()
    this._updateGapVariables()
    this._updateRowGapVariables()
    this._updatePaddingVariables()
    this._updateDirectionVariables()
    this._updateDisplayVariables()
    this._updateSpanVariables()
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

    // Display flex or what ever
    if (propertyName === 'display') {
      if (this.display && !this.display.includes(' ')) {
        desktop = tablet = mobile = this.display
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'align') {
      if (this.align && !this.align.includes(' ')) {
        desktop = tablet = mobile = this.align
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'justify') {
      if (this.justify && !this.justify.includes(' ')) {
        desktop = tablet = mobile = this.justify
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'direction') {
      if (this.direction && !this.direction.includes(' ')) {
        desktop = tablet = mobile = this.direction
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'span') {
      if (this.span && !this.span.includes(' ')) {
        desktop = tablet = mobile = this.span
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

  #gridVariables = {
    varsGap: css``,
    varsRowGap: css``,
    varsPadding: css``,
  }

  @watch('gap')
  private _updateGapVariables() {
    this._updateCSSVariables('gap', 'gap')
  }

  @watch('row-gap')
  private _updateRowGapVariables() {
    this._updateCSSVariables('rowGap', 'row-gap')
  }

  @watch('padding')
  private _updatePaddingVariables() {
    this._updateCSSVariables('padding', 'padding')
  }

  @watch('display')
  private _updateDisplayVariables() {
    this._updateCSSVariables('display', 'display')
  }

  @watch('direction')
  private _updateDirectionVariables() {
    this._updateCSSVariables('direction', 'direction')
  }

  @watch('span')
  private _updateSpanVariables() {
    this._updateCSSVariables('span', 'span')
  }

  render() {
    return html`<div class="container"><slot></slot></div>`
  }
}
