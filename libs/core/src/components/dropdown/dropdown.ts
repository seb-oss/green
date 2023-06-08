import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { when } from 'lit/directives/when.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import 'reflect-metadata'

import { randomId, constrainSlots } from 'utils/helpers'
import { watch, observeLightDOM } from 'utils/decorators'

import 'primitives/listbox'
import 'primitives/popover'

import type {
  GdsListbox,
  GdsOption,
  OptionsContainer,
} from 'primitives/listbox'
import type { GdsPopover } from 'primitives/popover'

import styles from './stem.styles.scss'

/**
 * @element gds-dropdown
 * A dropdown consist of a trigger button and a list of selectable options. It is used to select a single value from a list of options.
 *
 * @status beta
 *
 * @slot - Options for the dropdown. Accepts `gds-option` elements.
 * @slot button - The trigger button for the dropdown. Custom content for the button can be assigned through this slot.
 * @event change - Fired when the value of the dropdown changes.
 * @event ui-state - Fired when the dropdown is opened or closed.
 */
@customElement('gds-dropdown')
export class GdsDropdown<ValueType = any>
  extends LitElement
  implements OptionsContainer
{
  static styles = unsafeCSS(styles)

  static formAssociated = true

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
   * The value of the dropdown.
   */
  @property()
  value: ValueType | ValueType[] | undefined

  /**
   * Whether the dropdown should be searchable.
   */
  @property({ type: Boolean })
  searchable = false

  /**
   * Wheter the dropdown should support multiple selections.
   * When set to true, the dropdown will render a checkbox next to each option.
   * The value of the dropdown will be an array of the selected values.
   */
  @property({ type: Boolean })
  multiple = false

  // Private members
  #internals: ElementInternals
  #listboxRef: Ref<GdsListbox> = createRef()
  #triggerRef: Ref<HTMLButtonElement> = createRef()
  #searchInputRef: Ref<HTMLInputElement> = createRef()
  #optionElements: HTMLCollectionOf<GdsOption>
  #listboxId = randomId()
  #triggerId = randomId()

  constructor() {
    super()
    this.#internals = this.attachInternals()
    constrainSlots(this)

    this.#optionElements = this.getElementsByTagName(
      'gds-option'
    ) as HTMLCollectionOf<GdsOption>
  }

  connectedCallback() {
    super.connectedCallback()

    this.updateComplete.then(() => {
      this._handleLightDOMChange()
      this._handleValueChange()
    })
  }

  /**
   * Get the options of the dropdown.
   */
  get options() {
    return Array.from(this.#optionElements)
  }

  render() {
    const renderedValue = Array.isArray(this.value)
      ? this.value
          .reduce(
            (acc: string, cur: ValueType) =>
              acc + this.options.find((v) => v.value === cur)?.innerHTML + ', ',
            ''
          )
          .slice(0, -2)
      : this.options.find((v) => v.selected)?.innerHTML

    return html`
      ${when(
        this.label,
        () => html`<label for="${this.#triggerId}">${this.label}</label>`
      )}

      <button
        id="${this.#triggerId}"
        @click="${() => this.#setOpen(!this.open)}"
        aria-haspopup="listbox"
        role="combobox"
        aria-owns="${this.#listboxId}"
        aria-controls="${this.#listboxId}"
        aria-expanded="${this.open}"
        ${ref(this.#triggerRef)}
      >
        <slot name="button" gds-allow="span">
          <span>${unsafeHTML(renderedValue)} </span>
        </slot>
      </button>

      <gds-popover
        .open=${this.open}
        @ui-state=${(e: CustomEvent) => this.#setOpen(e.detail.open)}
        ${ref(this.#registerPopoverTrigger)}
      >
        ${when(
          this.searchable,
          () => html`<input
            type="text"
            aria-label="Filter available options"
            placeholder="Search"
            ${ref(this.#searchInputRef)}
            @keydown=${this.#handleSearchFieldKeyDown}
            @keyup=${this.#handleSearchFieldKeyUp}
          />`
        )}

        <gds-listbox
          id="${this.#listboxId}"
          .multiple="${ifDefined(this.multiple)}"
          ${ref(this.#listboxRef)}
          @change="${this.#handleSelectionChange}"
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
    this.value = this.value ?? this.options[0]?.value
    this.requestUpdate()
  }

  /**
   * Called whenever the `value` proptery changes
   */
  @watch('value')
  private _handleValueChange() {
    const value = this.value
    this.#internals.setFormValue(value as any)

    const listbox = this.#listboxRef.value as GdsListbox
    if (listbox) {
      if (Array.isArray(this.value)) listbox.selection = this.value as any[]
      else listbox.selection = [this.value as any]
    }

    // Set the ariaActiveDescendant of the trigger button
    const triggerButton = this.#triggerRef.value as any
    if (triggerButton)
      triggerButton.ariaActiveDescendantElement = this.options.find(
        (o) => o.value === value
      )
  }

  /**
   * Event handler for filtering the options in the dropdown.
   *
   * @param e The keyboard event.
   */
  #handleSearchFieldKeyUp = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement
    const options = Array.from(this.#optionElements)
    options.forEach((o) => (o.hidden = false))

    if (!input.value) return
    const filteredOptions = options.filter(
      (o) => !o.innerHTML.toLowerCase().includes(input.value.toLowerCase())
    )
    filteredOptions.forEach((o) => (o.hidden = true))
  }

  /**
   * Check for ArrowDown in the search field.
   * If found, focus should be moved to the listbox.
   */
  #handleSearchFieldKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      this.#listboxRef.value?.focus()
      return
    }
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
   * @param option The option to select.
   * @fires change
   */
  #handleSelectionChange() {
    const listbox = this.#listboxRef.value as GdsListbox
    if (!listbox) return

    if (this.multiple) this.value = listbox.selection.map((s) => s.value)
    else {
      this.value = listbox.selection[0]?.value
      this.#setOpen(false)
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
   * Sets the open state of the dropdown.
   *
   * @param open The open state.
   * @fires ui-state
   */
  #setOpen(open: boolean) {
    this.open = open
    this.#internals.ariaExpanded = open.toString()

    if (open) this.#registerAutoCloseListener()
    else {
      this.#unregisterAutoCloseListener()
      this.#searchInputRef.value && (this.#searchInputRef.value.value = '')
      Array.from(this.#optionElements).forEach((o) => (o.hidden = false))
    }

    this.dispatchEvent(
      new CustomEvent('ui-state', {
        detail: { open },
        bubbles: true,
        composed: true,
      })
    )
  }

  #registerAutoCloseListener() {
    window.addEventListener('click', this.#autoCloseListener)
    window.addEventListener('keyup', this.#autoCloseListener)
  }

  #unregisterAutoCloseListener() {
    window.removeEventListener('click', this.#autoCloseListener)
    window.removeEventListener('keyup', this.#autoCloseListener)
  }

  /**
   * A listener to close the dropdown when clicking outside of it,
   * or when any other element recieves a keyup event.
   */
  #autoCloseListener = (e: Event) => {
    if (e.target instanceof Node && !this.contains(e.target as Node))
      this.#setOpen(false)
  }
}

export const GdsDropdownReact = createComponent({
  tagName: 'gds-dropdown',
  elementClass: GdsDropdown,
  react: React,
})
