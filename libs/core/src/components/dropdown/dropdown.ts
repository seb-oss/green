import { localized, msg, str, updateWhenLocaleChanges } from '@lit/localize'
import { property, query, queryAsync } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { when } from 'lit/directives/when.js'

import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { observeLightDOM } from '../../utils/decorators/observe-light-dom'
import { watch } from '../../utils/decorators/watch'
import { GdsFormControlElement } from '../form/form-control'
import styles from './dropdown.styles'

import type { GdsListbox } from '../../primitives/listbox'
import type {
  GdsOption,
  OptionsContainer,
} from '../../primitives/listbox/option'

import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'
import '../../primitives/field-base'
import '../../primitives/listbox'
import '../icon/icons/checkmark'
import '../icon/icons/chevron-bottom'
import '../popover'
import '../button'

/**
 * @element gds-dropdown
 * A dropdown consist of a trigger button and a list of selectable options. It is used to select a single value from a list of options.
 *
 * @status beta
 *
 * @slot - Options for the dropdown. Accepts `gds-option` and `gds-menu-heading` elements.
 * @slot trigger - Custom content for the trigger button can be assigned through this slot.
 * @slot sub-label - Renders between the label and the trigger button.
 * @slot message - Renders below the trigger button. Will be red if there is a validation error.
 *
 * @event change - Fired when the value of the dropdown is changed through user interaction (not when value prop is set programatically).
 * @event gds-ui-state - Fired when the dropdown is opened or closed.
 */
@gdsCustomElement('gds-dropdown')
@localized()
export class GdsDropdown<ValueT = any>
  extends GdsFormControlElement<ValueT | ValueT[]>
  implements OptionsContainer
{
  static styles = [tokens, styles]
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  get type() {
    return 'gds-dropdown'
  }

  /**
   * The label of the dropdown.
   * Will only render if this property is set to a non-empty string.
   */
  @property()
  label = ''

  /**
   * The supporting text displayed between the label and the field itself
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
    })
  }

  render() {
    return html`
      ${when(
        !this.hideLabel,
        () => html`
          <gds-form-control-header>
            <label for="trigger" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>
        `,
      )}
      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${(trigger: HTMLElement) =>
          this.syncPopoverWidth ? `${trigger.offsetWidth}px` : `auto`}
        .calcMaxHeight=${this.#calcMaxHeight}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${(e: CustomEvent) => (this.open = e.detail.open)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
        >
          <slot name="lead" slot="lead"></slot>
          <button>
            <slot name="trigger">
              <span>${unsafeHTML(this.displayValue)}</span>
            </slot>
          </button>
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
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
          <gds-form-control-footer
            .validationMessage=${this.invalid &&
            (this.errorMessage || this.validationMessage)}
          ></gds-form-control-footer>
        `,
      )}
    `
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._elTriggerBtn
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
    // Make sure the value is one of the options, unless we have a placeholder
    else if (
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
    const triggerRect = trigger.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const bottomSpace = windowHeight - triggerRect.bottom
    const topSpace = triggerRect.top

    let height = Math.min(topSpace, this.maxHeight)
    if (bottomSpace > topSpace) height = Math.min(bottomSpace, this.maxHeight)

    return `${height - 16}px`
  }

  /**
   * Event handler for filtering the options in the dropdown.
   *
   * @param e The input event.
   */
  #handleSearchFieldInput = (e: KeyboardEvent) => {
    if (!e.currentTarget) return

    // We don't want this internal event to progate to the consumer
    e.stopPropagation()

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
        this.open = false
        this.dispatchEvent(
          new Event('input', {
            bubbles: true,
            composed: true,
          }),
        )
        setTimeout(() => this._elTriggerBtn?.focus(), 0)
      }

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        }),
      )
    })
  }

  /**
   * Emits `gds-ui-state`event and does some other house-keeping when the open state changes.
   */
  @watch('open')
  private _onOpenChange() {
    const open = this.open

    this.#optionElements?.forEach((o) => (o.hidden = !open))

    if (open) this.#registerAutoCloseListener()
    else {
      this.#unregisterAutoCloseListener()
      this._elSearchInput && (this._elSearchInput.value = '')
    }

    const selectedOption = this.options.find((option) => option.selected)

    this.updateComplete.then(() => selectedOption?.scrollIntoView())

    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { open },
        bubbles: true,
        composed: true,
      }),
    )
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

    if (isFocusOutside) this.open = false
  }

  #tabCloseListener = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && !this.searchable) {
      e.preventDefault()
      this.open = false
      this._elTriggerBtn?.focus()
    }
  }
}
