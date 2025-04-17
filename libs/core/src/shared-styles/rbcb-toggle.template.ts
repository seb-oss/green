import { html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

// rbcb = radio button / checkbox

export interface RbcbTemplateProps {
  checked: boolean
  disabled: boolean
  invalid: boolean
}

export const checkboxTemplate = (props: RbcbTemplateProps) => {
  const { checked, disabled, invalid } = props
  const modifiers = {
    '--checked': checked,
    '--disabled': disabled,
    '--invalid': invalid,
  }
  return html`
    <div class="rbcb ${classMap(modifiers)}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${when(
          checked,
          () =>
            html`<gds-icon-checkmark
              class="rbcb__icon"
              stroke="4"
            ></gds-icon-checkmark>`,
        )}
      </div>
    </div>
  `
}
