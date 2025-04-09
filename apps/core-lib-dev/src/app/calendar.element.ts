import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/calendar/index.js'

import { CustomizedDate } from '@sebgroup/green-core/components/calendar/calendar.component'

const YEAR_MONTH = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`

@customElement('calendar-example')
export class CalendarExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  @state()
  disabledWeekends = false

  @state()
  showWeekNumbers = false

  @state()
  showCustomizedDates = false

  #customizedDates = [
    {
      date: new Date(`${YEAR_MONTH}-07`),
      indicator: 'dot',
      color: 'var(--intent-danger-background)',
    },
    {
      date: new Date(`${YEAR_MONTH}-12`),
      indicator: 'dot',
      color: 'var(--intent-danger-background)',
    },
    {
      date: new Date(`${YEAR_MONTH}-24`),
      indicator: 'dot',
      color: 'var(--intent-danger-background)',
    },
    {
      date: new Date(`${YEAR_MONTH}-21`),
      indicator: 'dot',
      disabled: true,
    },
  ] as CustomizedDate[]

  render() {
    return html` <div style="width:320px; margin: 8rem auto;">
      <h3 style="margin-bottom: 2rem;">Standalone calendar</h3>
      <div class="card" style="padding: 0">
        <gds-calendar
          .disabledWeekends=${this.disabledWeekends}
          .showWeekNumbers=${this.showWeekNumbers}
          .customizedDates=${this.showCustomizedDates ? this.#customizedDates : []}
        ></gds-calendar>
      </div>
      <fieldset class="form-group" style="margin-top: 2rem">
        <legend>Example controls</legend>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.disabledWeekends}
            @change=${(e: Event) => (this.disabledWeekends = (e.target as HTMLInputElement).checked)} /><span
            >Disable weekends</span
          ><i
        ></i></label>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showWeekNumbers}
            @change=${(e: Event) => (this.showWeekNumbers = (e.target as HTMLInputElement).checked)} /><span
            >Show week numbers</span
          ><i
        ></i></label>
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showCustomizedDates}
            @change=${(e: Event) => (this.showCustomizedDates = (e.target as HTMLInputElement).checked)} /><span
            >Show customized dates</span
          ><i
        ></i></label>
      </div>
    </div>`
  }
}
