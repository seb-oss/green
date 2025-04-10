// checkbox-group.ts
import { localized } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsFormControlFooter } from '../../../primitives/form-control-footer/form-control-footer.component'
import { GdsFormControlHeader } from '../../../primitives/form-control-header/form-control-header.component'
import { gdsCustomElement, html } from '../../../scoping'
import { observeLightDOM } from '../../../utils/decorators'
import { watch } from '../../../utils/decorators/watch'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../../utils/mixins/declarative-layout-mixins'
import { GdsFormControlElement } from '../../form/form-control'
import { styles } from './checkbox-group.styles'

import type { GdsCheckbox } from '../checkbox.component'

@localized()
class CheckboxGroup extends GdsFormControlElement<string[]> {
  static styles = [styles]

  /**
   * Controls the font-size of label and supporting text on group form control header and single checkbox buttons respectively.
   */
  @property()
  size: 'large' | 'small' = 'large'

  /**
   * The direction in which checkbox buttons are displayed.
   */
  @property()
  direction: 'row' | 'column' = 'column'

  /**
   * The supporting text displayed between the label and the field.
   * This text provides additional context or information to the user.
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Whether the supporting text should be displayed or not.
   */
  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  /**
   * Returns an array of `<gds-checkbox>` elements in the checkbox group.
   *
   * @readonly
   */
  get checkboxes(): GdsCheckbox[] {
    return Array.from(
      this.querySelectorAll('[gds-element=gds-checkbox]'),
    ) as GdsCheckbox[]
  }

  @query('.content')
  private _contentElement!: HTMLElement

  private _isConnected = false

  connectedCallback() {
    super.connectedCallback()
    this._isConnected = true
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._isConnected = false
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._contentElement
  }

  @watch('value')
  private _handleValueChange() {
    if (this._isConnected) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.checked = this.value?.includes(checkbox.value) || false
      })
    }
  }

  render() {
    const classes = {
      'checkbox-group': true,
      'direction-row': this.direction === 'row',
      'direction-column': this.direction === 'column',
    }

    return html`<div
      role="group"
      id="checkboxgroup"
      class=${classMap(classes)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
    >
      ${this.#renderCheckboxGroupContents()}
    </div>`
  }

  #renderCheckboxGroupContents() {
    const elements = [
      this.#renderFieldControlHeader(),
      this.#renderCheckboxes(),
      this.#renderFieldControlFooter(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderFieldControlHeader() {
    if (this.label) {
      return html`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`
    }
  }

  #renderCheckboxes() {
    return html` <div class="content">
      <slot @input=${this._handleCheckboxChange}></slot>
    </div>`
  }

  @observeLightDOM({
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  })
  private _handleCheckboxChange(e?: Event) {
    e && e.stopPropagation()
    this.value = this.checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)
  }

  #renderFieldControlFooter() {
    return html`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .validationMessage=${this.invalid &&
      (this.errorMessage || this.validationMessage)}
    >
    </gds-form-control-footer>`
  }
}

/**
 * @summary A form control component for grouping checkbox buttons.
 * @status beta
 *
 * @element gds-checkbox-group
 *
 */
@gdsCustomElement('gds-checkbox-group', {
  dependsOn: [GdsFormControlHeader, GdsFormControlFooter],
})
export class GdsCheckboxGroup extends withLayoutChildProps(
  withMarginProps(withSizeXProps(CheckboxGroup)),
) {}
