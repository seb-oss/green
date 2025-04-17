import { html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

// Take an array of props here, iuse this as the interface of this template primitive. State, size, color, etc should be controlled through props.

export const checkboxTemplate = (checked: boolean) => {
  const checkedClass = {
    checked,
  }
  return html`
    <div class="rbcb-toggle">
      <div class="perimeter"></div>
      <div class="checkbox ${classMap(checkedClass)}">
        ${when(
          checked,
          () =>
            html`<gds-icon-checkmark
              class="check-icon"
              stroke="4"
              label=" "
            ></gds-icon-checkmark>`,
        )}
      </div>
    </div>
  `
}
