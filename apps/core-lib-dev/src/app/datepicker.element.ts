import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/datepicker/index.js'
import * as DatepickerTransitionalStyles from '@sebgroup/green-core/components/datepicker/datepicker.trans.styles.js'
DatepickerTransitionalStyles.register()

@customElement('datepicker-example')
export class CalendarExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  @state()
  accessor disabledWeekends = false

  @state()
  accessor showWeekNumbers = false

  render() {
    return html` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Datepicker</h3>
        <gds-datepicker
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          label="Pick a date"
        ></gds-datepicker>
      <fieldset class="form-group" style="margin-top: 2rem">
        <legend>Example controls</legend>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.disabledWeekends}
            @change=${(e) => (this.disabledWeekends = e.target.checked)} /><span
            >Disable weekends</span
          ><i
        ></i></label>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showWeekNumbers}
            @change=${(e) => (this.showWeekNumbers = e.target.checked)} /><span
            >Show week numbers</span
          ><i
        ></i></label>
    </div>`
  }
}
