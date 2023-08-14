import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './style/form.styles.scss'
import '../icon/icon'

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

  // TODO:
  // Might be neccessary to use something like the stopPropagation() event: 
  // This behavior is known as "bubbling" or "propagation," where the click event on the <div> is propagated to its child elements, and the first focusable element receives focus.

  render() { return html`
    <form>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base" data-badge="SEK">
            <label for="input">Label</label>
            <!-- <input type="text" id="input" placeholder=" " pattern="\S+.*" required/> -->
            <!-- <input type="text" id="input" placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required/> -->
            <input type="text" id="input" placeholder=" " minlength="3" pattern="[a-z]+" required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Only lowercase, min-length 3 characters</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="hash"></gds-icon></div>
          <div class="base" data-badge="SEK">
            <label for="number">Number</label>
            <input type="number" min="4" max="8" id="number" placeholder=" " required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Number type, range  min="4" max="8"</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="lock"></gds-icon></div>
          <div class="base">
            <label for="password">Password</label>
            <input type="password" min="4" max="8" id="password" placeholder=" " required/>
          </div>  
          <div class="trail"><gds-icon name="eye"></gds-icon></div>
        </div>
        <div class="support">
          <span>Password type</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="mail"></gds-icon></div>
          <div class="base">
            <label for="email">E-Mail</label>
            <input type="email" min="4" max="8" id="email" placeholder=" " required/>
          </div>  
          <div class="trail"><gds-icon name="send"></gds-icon></div>
        </div>
        <div class="support">
          <span>Email type</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="tel"></gds-icon></div>
          <div class="base">
            <label for="tel">Telephone</label>
            <input type="tel" pattern="[0-9\+]{4,18}" id="tel" placeholder=" " required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Tel type, Pattern [0-9\+]{4,18}</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base">
            <label for="date">Date</label>
            <input type="date" pattern="[0-9\+]{4,18}" id="date" placeholder=" " onfocus="this.showPicker()"  required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Tel type, Pattern [0-9\+]{4,18}</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base">
            <label for="week">Week</label>
            <input type="week" min="2018-W18" max="2018-W26" id="week" placeholder=" " onfocus="this.showPicker()"  required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Tel type, Pattern [0-9\+]{4,18}</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base">
            <label for="time">Time</label>
            <input type="time" min="09:00" max="18:00" id="time" placeholder=" " onfocus="this.showPicker()"  required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Tel type, Pattern [0-9\+]{4,18}</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base">
            <label for="datetime-local">Datetime Local</label>
            <input type="datetime-local" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" id="datetime-local" placeholder=" " onfocus="this.showPicker()"  required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Datetime local</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base">
            <label for="date">Date</label>
            <input type="month" pattern="[0-9\+]{4,18}" id="date" placeholder=" " onfocus="this.showPicker()"  required/>
          </div>  
          <div class="trail"><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Tel type, Pattern [0-9\+]{4,18}</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>

      <fieldset>
        <legend>Type: Text</legend>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Username" minlength="3" maxlength="20" required pattern="[a-zA-Z0-9]+"
        
        autocomplete="off" 
        autocorrect="off" 
        autocapitalize="off" 
        spellcheck="false"
        
        />
        <!-- Requires a minimum length of 3, maximum length of 20, and only allows alphanumeric characters -->
      </fieldset>

      <fieldset>
        <legend>Type: Password</legend>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Password" minlength="8" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}" />
        <!-- Requires a minimum length of 8, and at least one digit, lowercase letter, uppercase letter, and special character -->
      </fieldset>

      <fieldset>
        <legend>Type: Email</legend>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="E-Mail" required />
        <!-- Validates that the input is in a valid email format -->
      </fieldset>

      <fieldset>
        <legend>Type: Number</legend>
        <label for="number">Number:</label>
        <input type="number" id="number" name="number" placeholder="Number" min="0" max="100" required />
        <!-- Requires a minimum value of 0, maximum value of 100, and only allows numeric characters -->
      </fieldset>

      <fieldset>
  <legend>Type: Tel</legend>
  <label for="tel">Telephone:</label>
  <input type="tel" id="tel" name="tel" placeholder="Telephone" pattern="[0-9]+" required />
  <!-- Only allows numeric characters -->
</fieldset>



      <fieldset>
        <legend>Type: Date</legend>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required />
        <!-- Validates that the input is in a valid date format (yyyy-mm-dd) -->
      </fieldset>

      <fieldset>
        <legend>Type: Month</legend>
        <label for="month">Month:</label>
        <input type="month" id="month" name="month" required />
        <!-- Validates that the input is in a valid month format (yyyy-mm) -->
      </fieldset>

      <fieldset>
        <legend>Type: Checkbox</legend>
        <label for="checkbox">Checkbox:</label>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <!-- No specific pattern, but typically used to allow users to select multiple options -->
      </fieldset>

      <fieldset>
        <legend>Type: Radio</legend>
        <label for="radio">Radio:</label>
        <input type="radio" id="radio" name="radio" />
        <!-- No specific pattern, but typically used to allow users to select a single option from a list -->
      </fieldset>

      <fieldset>
        <legend>Type: Select</legend>
        <label for="select">Select:</label>
        <select type="select" id="select" name="select" required>
          <option value="">--Please select an option--</option>
          <option value="test">Item 1</option>
          <option value="test">Item 2</option>
          <option value="test">Item 3</option>
        </select>
        <!-- Provides a list of options for the user to select from, and requires a selection -->
      </fieldset>

      <fieldset>
        <legend>Type: Textarea</legend>
        <label for="textarea">Textarea:</label>
        <textarea id="textarea" name="textarea" minlength="10" maxlength="200" required></textarea>
        <!-- Requires a minimum length of 10, maximum length of 200 -->
      </fieldset>

      <fieldset>
        <legend>Type: Submit</legend>
        <input type="submit" id="submit" value="Submit" />
        <!-- Triggering a form submission when clicked -->
      </fieldset>
    </form>


` }
  
}
