import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { constrainSlots } from '../../utils/helpers'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './style/input.styles.css'
import '../icon/icon'
import '../badge/badge'
// import '../button/button'

/**
 *
 * @summary A custom input element that can be used in forms.
 * @documentation https://seb.io/docs/component/input
 * @status beta
 * @since 1.0.0
 *
 * @dependency gds-icon, gds-badge, gds-input-helper
 * @element gds-input
 *
 * @fires {CustomEvent} gds-input-changed - Fired when the input value changes.
 *
 * @cssprop --gds-input-background-color - The background color of the input.
 * @cssprop --gds-input-border-color - The border color of the input.
 *
 * @slot - The default slot for the input element.
 * @slot lead - The slot for the input lead icon.
 * @slot trail - The slot for the input trail icon.
 * @slot badge - The slot for the input badge.
 * @slot helper - The slot for the input helper text.
 *
 * @csspart gds-input - The input element.
 * @csspart gds-input-core - The core of the input element.
 * @csspart gds-input-core-base - The base of the input element.
 * @csspart gds-input-core-lead - The lead of the input element.
 * @csspart gds-input-core-trail - The trail of the input element.
 * @csspart gds-input-badge - The badge of the input element.
 * @csspart gds-input-helper - The helper text of the input element.
 *
 * @status beta
 */

@customElement('gds-input')
export class GdsInput extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  // Private members
  #internals: ElementInternals

  constructor() {
    super()
    this.#internals = this.attachInternals()
    constrainSlots(this)
  }

  @property({ type: String, reflect: true })
  lead = null

  @property({ type: String, reflect: true })
  trail = null

  @property({ type: String, reflect: true, attribute: 'label' })
  label = 'Label'

  slotLabel() {
    return this.textContent
      ? html`<slot part="label" gds-allow="#text"></slot>`
      : ''
  }

  slotLead() {
    return html`
      <div class="gds-input-core-lead">
        <slot name="lead" gds-allow="gds-icon"></slot>
      </div>
    `
  }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties)
    if (changedProperties.has('trail')) {
      this.updateParentClass()
    }
  }

  updateParentClass() {
    const trailSlotElement = this.renderRoot.querySelector(
      'slot[name="trail"]'
    ) as HTMLSlotElement
    const assignedElements = trailSlotElement.assignedElements({
      flatten: true,
    }) as HTMLElement[]
    const parentElement = this.renderRoot.querySelector(
      '.gds-input-core-trail'
    ) as HTMLElement

    if (assignedElements.some((element) => element.tagName === 'GDS-BUTTON')) {
      parentElement?.classList.add('gds-input-core-trail-button')
    } else {
      parentElement?.classList.remove('gds-input-core-trail-button')
    }
  }

  @property({ type: Boolean })
  hasInvalidState = false

  slotTrail() {
    const trailSlotContent = this.querySelector('[slot="trail"]')
    const hasButtonTag =
      trailSlotContent &&
      trailSlotContent.tagName.toLowerCase() === 'gds-button'
    const inputValue = this.renderRoot
      ?.querySelector<HTMLInputElement>('#input')
      ?.value.trim()

    if (this.hasInvalidState && hasButtonTag) {
      const slottedIcon = trailSlotContent?.querySelector('[slot="circle"]')
      if (slottedIcon) {
        slottedIcon.setAttribute('name', 'warning')
        const buttonParent = slottedIcon.parentElement
        if (buttonParent) {
          buttonParent.setAttribute('set', 'negative')
        }
      }
    }
    if (inputValue === '') {
      console.log('inputValue is empty')
    }

    return html`
      <div class="gds-input-core-trail">
        ${this.hasInvalidState && !hasButtonTag
          ? html` <gds-icon name="warning"></gds-icon> `
          : html` <slot name="trail" gds-allow="gds-icon gds-button"></slot> `}
      </div>
    `
  }

  slotOptions() {
    const optionElements = Array.from(this.querySelectorAll('option'))
    const optgroupElements = Array.from(this.querySelectorAll('optgroup'))

    const hasOptgroup = optgroupElements.length > 0
    const ungroupedOptions = optionElements.filter(
      (option) =>
        option.parentElement && option.parentElement.tagName !== 'OPTGROUP'
    )

    return html`
      ${optgroupElements.map(
        (optgroup) => html`
          <optgroup label="${optgroup.label}">
            ${Array.from(optgroup.children).map(
              (option) => html` <option>${option.textContent}</option> `
            )}
          </optgroup>
        `
      )}
      ${ungroupedOptions.map(
        (option) => html` <option>${option.textContent}</option> `
      )}
    `
  }

  slotBase() {
    const inputElement =
      this.renderRoot?.querySelector<HTMLInputElement>('#input')
    const rows = inputElement?.getAttribute('rows')
    const maxRows = rows || '1'
    inputElement?.style.setProperty('--gds-textarea-lines', maxRows.toString())

    let prevMaxRows = 1

    const handleInput = () => {
      const inputElement =
        this.renderRoot?.querySelector<HTMLInputElement>('#input')
      const inputValue = inputElement?.value.trim()

      if (inputValue === '') {
        this.hasInvalidState = false
        inputElement?.style.setProperty('--gds-textarea-lines', '0')
      } else {
        this.hasInvalidState = inputElement?.checkValidity() === false
      }

      const lines = (
        this.renderRoot
          ?.querySelector<HTMLInputElement>('#input')
          ?.value.split('\n').length || 1
      ).toString()

      const minRows = inputElement?.getAttribute('rows')
        ? parseInt(inputElement.getAttribute('rows')!)
        : 1

      prevMaxRows = Math.max(
        minRows,
        lines?.length > prevMaxRows ? lines.length : prevMaxRows
      )
      const maxRows = Math.max(minRows, parseInt(lines))
      inputElement?.setAttribute('rows', prevMaxRows.toString())
      inputElement?.style.setProperty(
        '--gds-textarea-lines',
        maxRows.toString()
      )
    }

    const inputType = this.getAttribute('type')?.toLowerCase() || ''
    const validInputTypes = [
      'text',
      'textarea',
      'select',
      'select-native',
      'duo',
    ]
    const hasInput = validInputTypes.includes(inputType)

    if (inputType === 'select-native') {
      return html`
        <div class="gds-input-core-base">
          <label for="input">${this.label}</label>
          <select id="input" title="test">
            <option disabled selected hidden>Select your option</option>
            ${this.slotOptions()}
          </select>
        </div>
      `
    }

    return html`
      <div class="gds-input-core-base">
        <label for="input">${this.label}</label>
        ${!hasInput || inputType === 'text'
          ? html` <input id="input" @input="${handleInput}" placeholder=" " /> `
          : inputType === 'textarea'
          ? html`
              <textarea
                id="input"
                @input="${handleInput}"
                @change="${handleInput}"
                @keyup="${handleInput}"
                @keydown="${handleInput}"
                placeholder=" "
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                rows="${rows || '1'}"
                spellcheck="false"
              ></textarea>
            `
          : inputType === 'select'
          ? html`
              <input
                part="input"
                type="text"
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly=""
                aria-controls="listbox"
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                value="Selected item"
                aria-expanded="false"
                aria-disabled="false"
              />
            `
          : inputType === 'select-nativeer'
          ? html`
              <!-- Options for multi select type -->
              <select id="input" title="test">
                <option disabled selected hidden>Select your option</option>
                <slot name="options"></slot>
              </select>
              <!-- <optgroup label="Group 1">
              <option>Option Slot 1</option>
              <option>Option Slot 2</option>
              <option>Option Slot 3</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Option Slot 3</option>
              <option>Option Slot 4</option>
              <option>Option Slot 5</option>
            </optgroup>
          </select> -->
              <!-- <select multiple="true" placeholder=" ">
            <option value="" disabled selected hidden>Select your option</option>
            <option>Option Slot 1</option>
            <option>Option Slot 2</option>
            <option>Option Slot 3</option>
            <option>Option Slot 4</option>
          </select> -->
            `
          : inputType === 'duo'
          ? html`
              <div class="gds-input-core-base-duo">
                <input
                  type="text"
                  id="duo-primary"
                  placeholder="Primary"
                  part="primary"
                  readonly="readonly"
                  tabindex="-1"
                  aria-controls="listbox"
                  aria-haspopup="listbox"
                  aria-labelledby="label"
                  aria-describedby="help-text"
                  role="combobox"
                />
                <input
                  type="text"
                  id="duo-secondary"
                  placeholder="Secondary"
                  part="secondary"
                  readonly="readonly"
                  tabindex="-1"
                  aria-controls="listbox"
                  aria-haspopup="listbox"
                  aria-labelledby="label"
                  aria-describedby="help-text"
                  role="combobox"
                />
              </div>
            `
          : ''}
      </div>
    `
  }

  slotBadge() {
    return html`
      <div class="gds-input-badge">
        <slot name="badge" gds-allow="gds-badge"></slot>
      </div>
    `
  }

  private inputElement: HTMLInputElement | null = null
  private exludeAttr = ['placeholder', 'id', 'label']

  private reflectAttributesToInput() {
    if (this.inputElement) {
      const attributes = this.attributes
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i]
        if (!this.exludeAttr.includes(attribute.name)) {
          this.inputElement.setAttribute(attribute.name, attribute.value)
        }
      }
    }
  }

  update(changedProperties: Map<PropertyKey, unknown>) {
    super.update(changedProperties)
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot?.getElementById(
        'input'
      ) as HTMLInputElement
    }
    this.reflectAttributesToInput()
  }

  render() {
    const hasLeadSlot = this.querySelector('[slot="lead"]') !== null
    const hasTrailSlot = this.querySelector('[slot="trail"]') !== null
    const hasBadgeSlot = this.querySelector('[slot="badge"]') !== null
    const content = html`${when(hasLeadSlot, () =>
      this.slotLead()
    )}${this.slotBase()}${when(hasBadgeSlot, () => this.slotBadge())}${when(
      hasTrailSlot,
      () => this.slotTrail()
    )}`

    return html`
      <div class="gds-input">
        <div class="gds-input-core">${content}</div>
        <slot name="helper" gds-allow="gds-input-helper"></slot>
      </div>
    `
  }
}
