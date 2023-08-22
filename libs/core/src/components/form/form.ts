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
          <div class="icon" data-badge="120"><gds-icon name="info"></gds-icon></div>
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
            <input type="date" pattern="[0-9\+]{4,18}" id="date" placeholder=" "  required/>
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
            <input type="week" min="2018-W18" max="2018-W26" id="week" placeholder=" "  required/>
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
            <input type="time" min="09:00" max="18:00" id="time" placeholder=" "  required/>
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
            <input type="datetime-local" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" id="datetime-local" placeholder=" "  required/>
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
            <input type="month" pattern="[0-9\+]{4,18}" id="date" placeholder=" "  required/>
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
          <div class="lead"><gds-icon name="search"></gds-icon></div>
          <div class="base">
            <label for="select">Select Search</label>
            <input type="text" id="select" placeholder=" "  required/>
          </div>  
          <div class="trail"><gds-icon name="chevron-down"></gds-icon></div>
        </div>
        <div class="support">
          <span>This is select with search</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="user"></gds-icon></div>
          <div class="base">
            <label for="select">Select Account</label>
            <input type="text" id="select" placeholder=" "  required/>
          </div>  
          <div class="base" data-badge="SEK">
            <label for="select">Select Account</label>
            <input type="text" id="select" placeholder=" "  required/>
          </div>  
          <div class="trail"><gds-icon name="chevron-down"></gds-icon></div>
        </div>
        <div class="support">
          <span>This is account select</span>
          <div class="icon" data-badge="120"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base" data-badge="SEK">
            <label for="textarea">Freetext</label>
            <textarea id="textarea" name="textarea" rows="1" minlength="10" maxlength="200" oninput="this.parentNode.dataset.value = this.value" required></textarea>
          </div>  
          <div class="trail" ><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Only lowercase, min-length 3 characters</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <gds-input>
        <div class="main">
          <div class="lead"><gds-icon name="calendar"></gds-icon></div>
          <div class="base" data-badge="SEK">
            <label for="span">Span with role</label>
            <span role="textbox" id="span" contenteditable>hello</span>
          </div>  
          <div class="trail" ><gds-icon name="x"></gds-icon></div>
        </div>
        <div class="support">
          <span>Only lowercase, min-length 3 characters</span>
          <div class="icon"><gds-icon name="info"></gds-icon></div>
        </div>
      </gds-input>
      <fieldset>
        <legend>Type: Textarea</legend>
        <label for="textarea">Textarea:</label>
        <textarea id="textarea" placeholder=" " name="textarea" minlength="10" maxlength="200" required></textarea>
        <!-- Requires a minimum length of 10, maximum length of 200 -->
      </fieldset>

      <fieldset>
        <legend>Type: Submit</legend>
        <input type="submit" id="submit" value="Submit" />
        <!-- Triggering a form submission when clicked -->
      </fieldset>
      <fieldset>
        <legend>Type: Range</legend>
        <input type="range" id="volume" name="volume" min="0" max="11"/>
        <!-- Triggering a form submission when clicked -->
      </fieldset>
    </form>


` }
  
}
