import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'
// import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

@customElement('calendar-example')
export class CalendarExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
    // registerTransitionalStyles()
  }

  @state()
  accessor disabledWeekends = false

  @state()
  accessor showWeekNumbers = false

  @state()
  accessor showCustomizedDates = false

  #customizedDates = [
    {
      date: new Date('2024-06-12'),
      indicator: 'dot',
      color: 'var(--intent-danger-background)',
    },
    {
      date: new Date('2024-06-13'),
      indicator: 'dot',
      color: 'var(--intent-danger-background)',
    },
    {
      date: new Date('2024-06-24'),
      indicator: 'dot',
      color: 'var(--intent-danger-background)',
    },
    {
      date: new Date('2024-06-07'),
      indicator: 'dot',
      disabled: true,
    },
  ]

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
        <label class="form-control"
          ><input
            type="checkbox"
            .checked=${this.showCustomizedDates}
            @change=${(e) => (this.showCustomizedDates = e.target.checked)} /><span
            >Show customized dates</span
          ><i
        ></i></label>
      </div>
    </div>`
  }
}
