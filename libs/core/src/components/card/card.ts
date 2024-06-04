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

  @property({ attribute: 'elevation', type: String })
  elevation?: string

  @property({ attribute: 'radius', type: String })
  radius?: string

  @property({ attribute: 'background', type: String })
  background?: string

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * It updates the column, gap, and padding variables.
   */
  connectedCallback() {
    super.connectedCallback()
    this._updateElevationVariables()
    this._updateRadiusVariables()
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

    if (propertyName === 'elevation') {
      if (this.elevation && !this.elevation.includes(' ')) {
        desktop = tablet = mobile = `var(--gds-sys-grid-gap-${this.elevation})`
      } else {
        ;({ desktop, tablet, mobile } = processBreakpoints(l, m, s))
      }
    }

    if (propertyName === 'radius') {
      if (this.radius && !this.radius.includes(' ')) {
        desktop = tablet = mobile = `var(--gds-sys-grid-gap-${this.radius})`
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
    varsElevation: css``,
  }

  @watch('elevation')
  private _updateElevationVariables() {
    this._updateCSSVariables('elevation', 'elevation')
  }

  @watch('radius')
  private _updateRadiusVariables() {
    this._updateCSSVariables('radius', 'radius')
  }

  render() {
    return html`<div class="card"><slot></slot></div>`
  }
}
