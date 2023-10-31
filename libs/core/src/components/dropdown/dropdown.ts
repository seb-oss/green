import { property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { when } from 'lit/directives/when.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { msg, str, updateWhenLocaleChanges } from '@lit/localize'
import 'reflect-metadata'

import { randomId, constrainSlots } from '../../utils/helpers'
import { watch, observeLightDOM } from '../../utils/decorators'

import {
  gdsCustomElement,
  html,
  getScopedTagName,
} from '../../utils/helpers/custom-element-scoping'

import '../../primitives/listbox'
import type {
  GdsListbox,
  GdsOption,
  OptionsContainer,
} from '../../primitives/listbox'

import '../../primitives/popover'
import type { GdsPopover } from '../../primitives/popover'

import { GdsFormControlElement } from '../form-control'

import styles from './dropdown.styles'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

/**
 * @element gds-dropdown
 * A dropdown consist of a trigger button and a list of selectable options. It is used to select a single value from a list of options.
 *
 * @status beta
 *
 * @slot - Options for the dropdown. Accepts `gds-option` elements.
 * @slot button - The trigger button for the dropdown. Custom content for the button can be assigned through this slot.
 * @slot sub-label - Renders between the label and the trigger button.
 * @slot message - Renders below the trigger button. Will be red if there is a validation error.
 *
 * @event change - Fired when the value of the dropdown is changed through user interaction (not when value prop is set programatically).
 * @event gds-ui-state - Fired when the dropdown is opened or closed.
 */
@gdsCustomElement('gds-dropdown')
export class GdsDropdown<ValueT = any>
  extends GdsFormControlElement<ValueT | ValueT[]>
  implements OptionsContainer
{
  static styles = styles
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * The label of the dropdown.
   * Will only render if this property is set to a non-empty string.
   */
  @property()
  label = ''

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

  // Private members
  #listboxRef: Ref<GdsListbox> = createRef()
  #triggerRef: Ref<HTMLButtonElement> = createRef()
  #searchInputRef: Ref<HTMLInputElement> = createRef()
  #optionElements: HTMLCollectionOf<GdsOption>
  #listboxId = randomId()
  #triggerId = randomId()

  constructor() {
    super()
    constrainSlots(this)
    updateWhenLocaleChanges(this)

    this.#optionElements = this.getElementsByTagName(
      getScopedTagName('gds-option')
    ) as HTMLCollectionOf<GdsOption>
  }

  connectedCallback() {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-dropdown')

    this.updateComplete.then(() => {
      this._handleLightDOMChange()
      this._handleValueChange()
    })
  }

  /**
   * Get the options of the dropdown.
   */
  get options() {
    return Array.from(this.#optionElements).filter(
      (o) => !o.hasAttribute('isplaceholder')
    )
  }

  /**
   * Return the first option with a isPlaceholder attribute.
   * If no placeholder is found, this will be undefined.
   */
  get placeholder() {
    return Array.from(this.#optionElements).find((o) =>
      o.hasAttribute('isplaceholder')
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
              ''
            )
            .slice(0, -2))
    } else {
      displayValue = this.options.find((v) => v.selected)?.innerHTML
    }

    return displayValue || this.placeholder?.innerHTML || ''
  }

  render() {
    return html`
      ${when(
        this.label,
        () => html`<label for="${this.#triggerId}">${this.label}</label>`
      )}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <button
        id="${this.#triggerId}"
        @click="${() => (this.open = !this.open)}"
        aria-haspopup="listbox"
        role="combobox"
        aria-owns="${this.#listboxId}"
        aria-controls="${this.#listboxId}"
        aria-expanded="${this.open}"
        ${ref(this.#triggerRef)}
      >
        <slot name="trigger">
          <span>${unsafeHTML(this.displayValue)}</span>
        </slot>
      </button>

      <span class="form-info"><slot name="message"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        @gds-ui-state=${(e: CustomEvent) => (this.open = e.detail.open)}
        ${ref(this.#registerPopoverTrigger)}
      >
        ${when(
          this.searchable,
          () => html`<input
            type="text"
            aria-label="${msg('Filter available options')}"
            placeholder="${msg('Search')}"
            ${ref(this.#searchInputRef)}
            @keydown=${this.#handleSearchFieldKeyDown}
            @keyup=${this.#handleSearchFieldKeyUp}
          />`
        )}

        <gds-listbox
          id="${this.#listboxId}"
          .multiple="${ifDefined(this.multiple)}"
          .compareWith="${this.compareWith}"
          ${ref(this.#listboxRef)}
          @change="${this.#handleSelectionChange}"
          @gds-focus="${this.#handleOptionFocusChange}"
          @keydown=${this.#handleListboxKeyDown}
        >
          <slot gds-allow="gds-option"></slot>
        </gds-listbox>
      </gds-popover>
    `
  }

  /**
   * Update value assignment and request update when the light DOM changes.
   */
  @observeLightDOM()
  private _handleLightDOMChange() {
    this.requestUpdate()
    this._handleValueChange()
    if (this.multiple) return

    // Set default value if none is set
    if (!this.value) {
      if (this.placeholder) this.value = this.placeholder.value
      else this.value = this.options[0]?.value
    }
    // Make sure the value is one of the options, unless we have a placeholder
    else if (
      !this.placeholder &&
      this.options.find((o) => o.value === this.value) === undefined
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
    const listbox = this.#listboxRef.value as GdsListbox
    if (listbox) {
      if (Array.isArray(this.value)) listbox.selection = this.value as any[]
      else listbox.selection = [this.value as any]
    }
  }

  /**
   * Event handler for filtering the options in the dropdown.
   *
   * @param e The keyboard event.
   */
  #handleSearchFieldKeyUp = (e: KeyboardEvent) => {
    const input = this.#searchInputRef.value!
    const options = Array.from(this.#optionElements)
    options.forEach((o) => (o.hidden = false))

    if (!input.value) return
    const filteredOptions = options.filter(
      (o) => !this.searchFilter(input.value, o)
    )
    filteredOptions.forEach((o) => (o.hidden = true))
  }

  /**
   * Check for ArrowDown or Tab in the search field.
   * If found, focus should be moved to the listbox.
   */
  #handleSearchFieldKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'Tab') {
      e.preventDefault()
      this.#listboxRef.value?.focus()
      return
    }
  }

  /**
   * Check for Tab in the listbox.
   * If found, focus should be moved to the search field.
   */
  #handleListboxKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && this.searchable) {
      e.preventDefault()
      this.#searchInputRef.value?.focus()
      return
    }
  }

  #handleOptionFocusChange = (e: FocusEvent) => {
    // Set the ariaActiveDescendant of the trigger button
    const triggerButton = this.#triggerRef.value as any
    if (triggerButton)
      triggerButton.ariaActiveDescendantElement = e.target as any
  }

  /**
   * Registers the trigger button of the dropdown to the popover.
   *
   * @param el The popover element.
   */
  #registerPopoverTrigger(el?: Element) {
    if (el) {
      const popover = el as GdsPopover
      popover.trigger = this.#triggerRef.value as HTMLButtonElement
    }
  }

  /**
   * Selects an option in the dropdown.
   *
   * @fires change
   */
  #handleSelectionChange() {
    const listbox = this.#listboxRef.value as GdsListbox
    if (!listbox) return

    if (this.multiple) this.value = listbox.selection.map((s) => s.value)
    else {
      this.value = listbox.selection[0]?.value
      this.open = false
      setTimeout(() => this.#triggerRef.value?.focus(), 0)
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    )
  }

  /**
   * Emits `gds-ui-state`event and does some other house-keeping when the open state changes.
   */
  @watch('open')
  private _onOpenChange() {
    const open = this.open

    Array.from(this.#optionElements).forEach((o) => (o.hidden = !open))

    if (open) this.#registerAutoCloseListener()
    else {
      this.#unregisterAutoCloseListener()
      this.#searchInputRef.value && (this.#searchInputRef.value.value = '')
    }

    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        detail: { open },
        bubbles: true,
        composed: true,
      })
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
      this.#triggerRef.value?.focus()
    }
  }
}
