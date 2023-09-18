import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './style/badge.styles.scss'

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

  @property({ type: String, reflect: true, attribute: 'content' })
  badgeContent = 'SEK'
    // Disable content this.textContent

  // variants: 
  // 1. Information
  // 2. Success
  // 3. Warning
  // 4. Error

  // Types: 
  // 1. Status
  // 3. Counter
  // 4. Indicator ( icon and percentage )

  render() { 
    const truncatedText = this.badgeContent ? this.badgeContent.substring(0, 3) : '';
    return html`<div class="gds-badge">${truncatedText}</div>` }
}
