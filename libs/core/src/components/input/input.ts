import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './style/input.styles.scss'
import '../icon/icon'

/**
 * @element gds-input
 *
 * @status beta
 */

@customElement('gds-input')
export class GdsInput extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  render() { return html`
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base" data-badge="SEK">
            <label for="input">Label</label>
            <input type="text" id="input" placeholder=" " minlength="3" pattern="[a-z]+" required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Only lowercase, min-length 3 characters</span>
          <div class="icon" data-badge="120"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
` }
  
}
