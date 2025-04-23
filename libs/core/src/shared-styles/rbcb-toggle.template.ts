import { html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

// rbcb = radio button / checkbox

export interface RbcbTemplateProps {
  type: 'checkbox' | 'radio'
  checked: boolean
  disabled: boolean
  invalid: boolean
}

export const rbcbTemplate = (props: RbcbTemplateProps) => {
  const { type, checked, disabled, invalid } = props
  const modifiers = {
    'rbcb--checkbox': type === 'checkbox',
    'rbcb--radio': type === 'radio',
    '--checked': checked,
    '--disabled': disabled,
    '--invalid': invalid,
  }
  return html`
    <div class="rbcb ${classMap(modifiers)}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${when(
          type === 'checkbox' && checked,
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
