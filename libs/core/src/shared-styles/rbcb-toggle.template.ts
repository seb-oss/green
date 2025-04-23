import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { html } from '../scoping'

// rbcb = radio button / checkbox

export interface RbcbTemplateProps {
  type: 'checkbox' | 'radio'
  checked: boolean
  disabled: boolean
  invalid: boolean
}

/**
 * Renders a checkbox toggle.
 */
export const checkboxToggle = (props: Omit<RbcbTemplateProps, 'type'>) =>
  template({ ...props, type: 'checkbox' })

/**
 * Renders a radio toggle.
 */
export const radioToggle = (props: Omit<RbcbTemplateProps, 'type'>) =>
  template({ ...props, type: 'radio' })

const template = (props: RbcbTemplateProps) => {
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
