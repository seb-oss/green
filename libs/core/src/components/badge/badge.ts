import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { constrainSlots } from '../../utils/helpers'
import { when } from 'lit/directives/when.js'
import styles from './style/badge.styles.css'

/**
 *
 * @element gds-badge
 * @summary A component that displays a badge with different variants and types.
 * @documentation https://seb.io/docs/component/badge
 * @status beta
 * @since 1.0.0
 *
 * @cssprop --gds-badge-background-color - The background color of the badge.
 * @cssprop --gds-badge-color - The text color of the badge.
 * @cssprop --gds-badge-font-size - The font size of the badge.
 * @cssprop --gds-badge-height - The height of the badge.
 * @cssprop --gds-badge-width - The width of the badge.
 *
 * @variant Information - A badge with an information icon and blue background color.
 * @variant Success - A badge with a checkmark icon and green background color.
 * @variant Warning - A badge with an exclamation mark icon and yellow background color.
 * @variant Error - A badge with a cross icon and red background color.
 *
 * @type Status - A badge that displays a status.
 * @type Counter - A badge that displays a count.
 * @type Indicator - A badge that displays an icon and percentage.
 *
 * @example
 * <gds-badge variant="Information" type="Status">Pending</gds-badge>
 * <gds-badge variant="Success" type="Counter">10</gds-badge>
 * <gds-badge variant="Warning" type="Indicator" icon="warning" percentage="50">50%</gds-badge>
 * <gds-badge variant="Error" type="Status">Failed</gds-badge>
 *
 */

@customElement('gds-badge')
export class GdsBadge extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  // Private members
  #internals: ElementInternals

  constructor() {
    super()
    this.#internals = this.attachInternals()
    constrainSlots(this)
  }

  @property({ type: String, reflect: true, attribute: 'variant' })
  variant = ''

  @property({ type: String, reflect: true, attribute: 'type' })
  type = ''

  @property({ type: String, reflect: true, attribute: 'icon' })
  icon = ''

  slotIcon() {
    return html` <slot name="icon" gds-allow="gds-icon"></slot> `
  }

  slotLabel() {
    const content = this.textContent?.trim() || ''
    const hasLabel = content !== ''

    let label = content
    if (this.type.toLowerCase() === 'counter' && label.length > 4) {
      label = label.substring(0, 4)
      return hasLabel ? html`${label}` : ''
    }

    return hasLabel ? html`<slot part="label" gds-allow="#text"></slot>` : ''
  }

  // slotLabel() {

  //   return this.textContent
  //     ? html`<slot part="label" gds-allow="#text"></slot>`
  //     : ''
  // }

  render() {
    const hasIconSlot = this.querySelector('[slot="icon"]') !== null
    const content = html`${when(
      hasIconSlot,
      () => html`<slot name="icon" gds-allow="gds-icon"></slot>`,
    )}${this.slotLabel()}`

    return html`<div class="gds-badge">${content}</div>`
  }
}
