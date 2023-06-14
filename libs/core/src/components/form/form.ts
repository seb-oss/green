import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './style/form.styles.scss'

/**
 * @element gds-form
 *
 * @status beta
 */

@customElement('gds-form')
export class GdsForm extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }


  render() { return html`<form>
  
  <fieldset>
  <legend>Type: Text</legend>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Username" />
</fieldset>

<fieldset>
  <legend>Type: Password</legend>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" placeholder="Password" />
</fieldset>

<fieldset>
  <legend>Type: Email</legend>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="E-Mail" />
</fieldset>

<fieldset>
  <legend>Type: Number</legend>
  <label for="number">Number:</label>
  <input type="number" id="number" name="number" placeholder="Number" />
</fieldset>

<fieldset>
  <legend>Type: Email</legend>
  <label for="date">Date:</label>
  <input type="date" id="date" name="date" />
</fieldset>

<fieldset>
  <legend>Type: Email</legend>
  <label for="month">Month:</label>
  <input type="month" id="month" name="month" />
</fieldset>

<fieldset>
  <legend>Type: Email</legend>

  <label for="checkbox">Checkbox:</label>
  <input type="checkbox" id="checkbox" name="checkbox" />
</fieldset>

<fieldset>
  <legend>Type: Email</legend>
  <label for="radio">Radio:</label>
  <input type="radio" id="radio" name="radio" />
</fieldset>

<fieldset>
  <legend>Type: Email</legend>
  <label for="select">Select:</label>
  <select type="select" id="select" name="select">
    <option value="test">Item</option>
    <option value="test">Item</option>
    <option value="test">Item</option>
  </select>
</fieldset>

<fieldset>
  <legend>Type: Email</legend>
  <label for="">Textare</label>
  <textarea>Textares</textarea>
</fieldset>

<fieldset>
  <legend>Type: Email</legend>
  <label for="submit">Submit:</label>
  <input type="submit" id="submit" value="Submit" />
</fieldset>
  
  </form>` }
  
}
