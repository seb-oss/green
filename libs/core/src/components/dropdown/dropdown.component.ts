import { localized, msg, str } from '@lit/localize'
import { property, query, queryAsync } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { when } from 'lit/directives/when.js'
import { flip, offset } from '@floating-ui/dom'

import { GdsFieldBase } from '../../primitives/field-base/field-base.component'
import { GdsFormControlFooter } from '../../primitives/form-control-footer/form-control-footer.component'
import { GdsFormControlHeader } from '../../primitives/form-control-header/form-control-header.component'
import { GdsListbox } from '../../primitives/listbox/listbox.component'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { observeLightDOM } from '../../utils/decorators/observe-light-dom'
import { watch } from '../../utils/decorators/watch'
import { GdsFormControlElement } from '../form/form-control'
import { IconCheckmark } from '../icon/icons/checkmark.component'
import { IconChevronBottom } from '../icon/icons/chevron-bottom.component'
import { GdsPopover, UIStateChangeReason } from '../popover/popover.component'
import styles from './dropdown.styles'

import type {
  GdsOption,
  OptionsContainer,
} from '../../primitives/listbox/option.component'

export * from '../../primitives/listbox/option.component'

/**
 * @element gds-dropdown
 * A dropdown consist of a trigger button and a list of selectable options. It is used to select a single value from a list of options.
 *
 * @status beta
 *
 * @slot - Options for the dropdown. Accepts `gds-option` and `gds-menu-heading` elements.
 * @slot trigger - Custom content for the trigger button can be assigned through this slot.
 * @slot supporting-text - A supporting text that will be displayed below the label and above the input field.
 * @slot extended-supporting-text - A longer supporting text can be placed here. It will be displayed in a panel when the user clicks the info button.
 * @slot message - ***(deprecated - use `errorMessage` property instead)*** Error message to show below the input field whem there is a validation error.
 * @slot sub-label - ***(deprecated - use `supporting-text` slot instead)*** Renders between the label and the trigger button.
 *
 * @event change - Fired when the value of the dropdown is changed through user interaction (not when value prop is set programatically).
 * @event input - Fired when the value of the dropdown is changed through user interaction.
 * @event gds-ui-state - Fired when the dropdown is opened or closed by the user. Can be cancelled to prevent the dropdown from opening or closing.
 * @event gds-filter-input - Fired when the user types in the search field. The event is cancellable, and the consumer is expected to handle filtering and updating the options list if the event is cancelled.
 */
@gdsCustomElement('gds-dropdown', {
  dependsOn: [
    GdsFormControlHeader,
    GdsFormControlFooter,
    GdsFieldBase,
    GdsListbox,
    GdsPopover,
    IconCheckmark,
    IconChevronBottom,
  ],
})
@localized()
export class GdsDropdown<ValueT = any>
  extends GdsFormControlElement<ValueT | ValueT[]>
  implements OptionsContainer
{
  static styles = [tokens, styles]

  get type() {
    return 'gds-dropdown'
  }

  /**
   * The supporting text displayed between the label and the field itself.
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Sets the open state of the dropdown.
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * Whether the dropdown should be searchable.
   */
  @property({ type: Boolean, reflect: true })
  searchable = false

  /**
   * Wheter the dropdown should support multiple selections.
   * When set to true, the dropdown will render a checkbox next to each option.
   * The value of the dropdown will be an array of the selected values.
   */
  @property({ type: Boolean, reflect: true })
  multiple = false

  /**
   * Whether the dropdown should be rendered as a combobox.
   * When set to true, the dropdown will render an input field instead of a button.
   * The value of the dropdown will be a string representing the selected value.
   */
  @property({ type: Boolean, reflect: true })
  combobox = false

  /**
   * Delegate function for comparing option values.
   * By default the option values are compared using strict equality.
   * If you want to compare objects by field values, you can provide
   * a custom compare function here. The function should return true
   * if the values are considered equal.
   *
   * Example:
   * ```ts
   * dropdown.compareWith = (a, b) => a.id === b.id
   * ```
   */
  @property()
  compareWith: (a: ValueT, b: ValueT) => boolean = (a, b) => a === b

  /**
   * Delegate function for customizing the search filtering.
   * By default, the search filter will just check if the option label
   * contains the search string using [String.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes).
   *
   * This property allows you to provide a custom filter function to use instead.
   *
   * For example, to filter on value instead of label:
   * ```ts
   * dropdown.searchFilter = (query, option) =>
   *    option.value.toLowerCase().includes(query.toLowerCase())
   * ```
   */
  @property()
  searchFilter: (q: string, o: GdsOption) => boolean = (q, o) =>
    o.innerHTML.toLowerCase().includes(q.toLowerCase())

  /**
   * Whether the popover should sync its width to the trigger button. When this is
   * set to `true`, the popover will always have the same width as the trigger button.
   *
   * By default, line-breaks will be applied to the option content if it is wider than
   * the popover width. If you use this option, make sure to verify that your options
   * are still readable and apply appropriate custom layout or truncation if neccecary.
   */
  @property({ type: Boolean, attribute: 'sync-popover-width' })
  syncPopoverWidth = false

  /**
   * Maximum height of the dropdown list.
   */
  @property({ type: Number, attribute: 'max-height' })
  maxHeight = 500

  /**
   * Size of the dropdown. Supports `medium` and `small`. There is no `large` size for dropdowns.
   * `medium` is the default size.
   */
  @property()
  size: 'medium' | 'small' = 'medium'

  /**
   * Whether to hide the label.
   */
  @property({ type: Boolean, attribute: 'hide-label' })
  hideLabel = false

  /**
   * Whether to disable the mobile styles.
   */
  @property()
  disableMobileStyles = false

  /**
   * Get the options of the dropdown.
   */
  get options() {
    if (!this.#optionElements) return []
    return Array.from(this.#optionElements).filter(
      (o) => !o.hasAttribute('isplaceholder'),
    )
  }

  /**
   * Return the first option with a isPlaceholder attribute.
   * If no placeholder is found, this will be undefined.
   */
  get placeholder() {
    if (!this.#optionElements) return
    return Array.from(this.#optionElements).find((o) =>
      o.hasAttribute('isplaceholder'),
    )
  }

  /**
   * Returns the display value as a string.
   * If the dropdown is in multiple mode, this will be a comma separated list of the selected values.
   */
  get displayValue() {
    let displayValue: string | undefined

    if (Array.isArray(this.value)) {
      this.value.length > 2
        ? (displayValue = msg(str`${this.value.length} selected`))
        : (displayValue = this.value
            .reduce(
              (acc: string, cur: ValueT) =>
                acc +
                this.options.find((v) => v.value === cur)?.innerHTML +
                ', ',
              '',
            )
            .slice(0, -2))
    } else {
      displayValue = this.options.find((v) => v.selected)?.innerHTML
    }

    return displayValue || this.placeholder?.innerHTML || ''
  }

  /**
   * Moves focus to this element.
   */
  focus() {
    this._getValidityAnchor().focus()
  }

  /**
   * A reference to the field element. This does not refer to the trigger button element itself,
   * but the wrapper that makes up the visual field.
   * Intended for use in integration tests.
   */
  test_getFieldElement() {
    return this.shadowRoot?.querySelector('#field')
  }

  #optionElements?: NodeListOf<GdsOption>

  @query('#trigger')
  private _elTriggerBtn!: HTMLButtonElement

  @queryAsync('#listbox')
  private _elListbox!: Promise<GdsListbox>

  @query('#searchinput')
  private _elSearchInput!: HTMLInputElement

  connectedCallback() {
    super.connectedCallback()

    this.updateComplete.then(() => {
      this._handleLightDOMChange()
      this._handleValueChange()
      this._handleOpenChange()
    })
  }

  render() {
    return html`
      ${when(
        !this.hideLabel,
        () => html`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${when(
              this.supportingText.length > 0,
              () =>
                html`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`,
            )}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `,
      )}
      <gds-popover
        .autofocus=${!this.combobox}
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${(trigger: HTMLElement) =>
          this.syncPopoverWidth ? `${trigger.offsetWidth}px` : `auto`}
        .calcMaxHeight=${this.#calcMaxHeight}
        .disableMobileStyles=${this.disableMobileStyles || this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox
          ? [offset(8), flip()]
          : GdsPopover.DefaultMiddleware}
        @gds-ui-state=${this.#handlePopoverStateChange}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox && !this.multiple
            ? this.#renderCombobox()
            : this.#renderTriggerButton()}
          <gds-icon-chevron-bottom
            slot="trail"
            label=${msg('Expand')}
          ></gds-icon-chevron-bottom>
        </gds-field-base>

        ${when(
          this.searchable,
          () =>
            html`<input
              id="searchinput"
              type="text"
              aria-label="${msg('Filter available options')}"
              placeholder="${msg('Search')}"
              @keydown=${this.#handleSearchFieldKeyDown}
              @input=${this.#handleSearchFieldInput}
            />`,
        )}
        <gds-listbox
          id="listbox"
          .multiple="${ifDefined(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${this.#handleSelectionChange}"
          @gds-focus="${this.#handleOptionFocusChange}"
          @keydown=${this.#handleListboxKeyDown}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${when(
        !this.hideLabel,
        () => html`
          <gds-form-control-footer class="size-${this.size}">
            ${when(
              this.invalid,
              // @deprecated
              // Wrapped in a slot for backwards compatibility with the deprecated message slot
              // Remove for 2.0 release
              () => html`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage || this.validationMessage}
                </slot>
              `,
            )}
          </gds-form-control-footer>
        `,
      )}
    `
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._elTriggerBtn
  }

  #renderCombobox = () => {
    return html`
      <input
        id="trigger"
        role="combobox"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${this.placeholder?.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${(e: MouseEvent) => {
          e.stopImmediatePropagation()
        }}
        @input=${(e: InputEvent) => {
          this.value = (e.target as HTMLInputElement).value as any
          this.#dispatchInputEvent()
          this.#handleSearchFieldInput(e)
          this.#dispatchUISateEvent(true, 'show') && (this.open = true)
        }}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            this.#dispatchUISateEvent(true, 'show') && (this.open = true)
            this._elListbox.then((listbox) => listbox.focus())
          }
          if (e.key === 'Enter') {
            this.#dispatchChangeEvent()
          }
        }}
      />
    `
  }

  #renderTriggerButton = () => {
    return html`
      <button
        id="trigger"
        role="combobox"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${unsafeHTML(this.displayValue)}</span>
        </slot>
      </button>
    `
  }

  /**
   * Update value assignment and request update when the light DOM changes.
   */
  @observeLightDOM({
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  })
  private _handleLightDOMChange() {
    this.requestUpdate()

    this.#optionElements = this.querySelectorAll('[gds-element=gds-option]')

    if (this.multiple) {
      this._handleValueChange()
      return
    }

    // Set default value if none is set
    if (this.value === undefined) {
      if (this.placeholder) this.value = this.placeholder.value
      else this.value = this.options[0]?.value
    }
    // Make sure the value is one of the options, unless we have a placeholder or is in combobox mode
    else if (
      !this.combobox &&
      !this.placeholder &&
      this.options.find((o) =>
        this.compareWith(o.value, this.value as ValueT),
      ) === undefined
    ) {
      this.options[0] && (this.options[0].selected = true)
      this.value = this.options[0]?.value
    }
  }

  /**
   * Called whenever the `value` property changes
   */
  @watch('value')
  private _handleValueChange() {
    this._elListbox.then((listbox) => {
      if (listbox) {
        if (Array.isArray(this.value)) listbox.selection = this.value as any[]
        else listbox.selection = [this.value as any]
      }
    })
  }

  #calcMaxHeight = (trigger: HTMLElement) => {
    if (this.combobox) {
      const triggerRect = trigger.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const bottomSpace = windowHeight - triggerRect.bottom
      const topSpace = triggerRect.top

      let height = Math.min(topSpace, this.maxHeight)
      if (bottomSpace > topSpace) height = Math.min(bottomSpace, this.maxHeight)
      return `${height - 16}px`
    }

    const height = Math.min(window.innerHeight, this.maxHeight)
    return `${height - 16}px`
  }

  #dispatchUISateEvent = (toState: boolean, reason: UIStateChangeReason) =>
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { reason, open: toState },
        bubbles: false,
        composed: false,
        cancelable: true,
      }),
    )

  #handlePopoverStateChange = (e: CustomEvent) => {
    if (this.#dispatchUISateEvent(e.detail.open, e.detail.reason)) {
      this.open = e.detail.open
    }
  }

  /**
   * Event handler for filtering the options in the dropdown.
   *
   * @param e The input event.
   */
  #handleSearchFieldInput = (e: InputEvent) => {
    if (!e.currentTarget) return

    // We don't want this internal event to progate to the consumer
    e.stopPropagation()

    // Emit cancellable filter input event. If cancelled, consumer is expreced to handle filtering and update the options list.
    const wasCancelled = !this.dispatchEvent(
      new CustomEvent('gds-filter-input', {
        detail: { value: (e.currentTarget as HTMLInputElement).value },
        cancelable: true,
      }),
    )

    if (wasCancelled) return

    const input = e.currentTarget as HTMLInputElement
    this.options.forEach((o) => (o.hidden = false))

    if (!input.value) return
    const filteredOptions = this.options.filter(
      (o) => !this.searchFilter(input.value, o),
    )
    filteredOptions.forEach((o) => (o.hidden = true))
  }

  /**
   * Check for ArrowDown or Tab in the search field.
   * If found, focus should be moved to the listbox.
   */
  #handleSearchFieldKeyDown = (e: KeyboardEvent) => {
    this._elListbox?.then((listbox) => {
      if (e.key === 'ArrowDown' || e.key === 'Tab') {
        e.preventDefault()
        listbox.focus()
        return
      }
    })
  }

  /**
   * Check for Tab in the listbox.
   * If found, focus should be moved to the search field.
   */
  #handleListboxKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && this.searchable) {
      e.preventDefault()
      this._elSearchInput?.focus()
      return
    }
  }

  #handleOptionFocusChange = (e: FocusEvent) => {
    // Set the ariaActiveDescendant of the trigger button
    const triggerButton = this._elTriggerBtn as any
    if (triggerButton)
      triggerButton.ariaActiveDescendantElement = e.target as any
  }

  /**
   * Selects an option in the dropdown.
   *
   * @fires change
   */
  #handleSelectionChange() {
    this._elListbox.then((listbox) => {
      if (this.multiple) this.value = listbox.selection.map((s) => s.value)
      else {
        this.value = listbox.selection[0]?.value
        if (this.#dispatchUISateEvent(false, 'close')) {
          this.open = false
          setTimeout(() => this._elTriggerBtn?.focus(), 0)
        }
      }

      this.#dispatchInputEvent()
      this.#dispatchChangeEvent()
    })
  }

  #dispatchInputEvent = () => {
    this.dispatchEvent(
      new Event('input', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  #dispatchChangeEvent = () => {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  /**
   * Emits `gds-ui-state`event and does some other house-keeping when the open state changes.
   */
  @watch('open')
  private _handleOpenChange() {
    const open = this.open

    this.options.forEach((o) => (o.hidden = !open))

    if (open) this.#registerAutoCloseListener()
    else {
      this.#unregisterAutoCloseListener()
      this._elSearchInput && (this._elSearchInput.value = '')
    }

    const selectedOption = this.options.find((option) => option.selected)

    requestAnimationFrame(async () => {
      await this.updateComplete
      selectedOption?.scrollIntoView({
        block: 'center',
      })
    })
  }

  #registerAutoCloseListener() {
    this.addEventListener('blur', this.#blurCloseListener)
    this.addEventListener('gds-blur', this.#blurCloseListener)
    this.addEventListener('keydown', this.#tabCloseListener)
  }

  #unregisterAutoCloseListener() {
    this.removeEventListener('blur', this.#blurCloseListener)
    this.removeEventListener('gds-blur', this.#blurCloseListener)
    this.removeEventListener('keydown', this.#tabCloseListener)
  }

  /**
   * A listener to close the dropdown when any other element is focused.
   */
  #blurCloseListener = (e: Event) => {
    const isFocusOutside =
      e instanceof FocusEvent &&
      e.relatedTarget &&
      !this.contains(e.relatedTarget as Node)

    if (isFocusOutside && this.#dispatchUISateEvent(false, 'close'))
      this.open = false
  }

  #tabCloseListener = (e: KeyboardEvent) => {
    if (
      e.key === 'Tab' &&
      !this.searchable &&
      this.#dispatchUISateEvent(false, 'close')
    ) {
      e.preventDefault()
      this.open = false
      this._elTriggerBtn?.focus()
    }
  }
}
