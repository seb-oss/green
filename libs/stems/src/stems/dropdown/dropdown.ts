import { LitElement, html, unsafeCSS } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, queryAll } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import 'reflect-metadata'

import { constrainSlots } from '../../tools/utils'

import { GdsListbox, GdsOption } from '../listbox/listbox'
import { GdsPopover } from '../popover/popover'

import styles from './stem.styles.scss'

@customElement('gds-dropdown')
export class GdsDropdown extends LitElement {
  static styles = unsafeCSS(styles)
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }
  static properties = {
    open: { type: Boolean, reflect: true },
    value: { reflect: false },
  }
  static formAssociated = true

  open = false
  value: any

  private internals: ElementInternals
  private listBoxRef: Ref<GdsListbox> = createRef()
  private triggerRef: Ref<HTMLButtonElement> = createRef()
  private _optionElements: HTMLCollectionOf<GdsOption>

  constructor() {
    super()
    this.internals = this.attachInternals() as any
    this.internals.role = 'combobox'
    constrainSlots(this)

    this._optionElements = this.getElementsByTagName(
      'gds-option'
    ) as HTMLCollectionOf<GdsOption>
  }

  get values() {
    return Array.from(this._optionElements).map((o) => ({
      option: o,
      selected: this.value === o.value,
    }))
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.internals.setFormValue(this.value)
    this.internals.ariaExpanded = this.open.toString()
    this.value = this.value || this.values[0].option.value
  }

  render() {
    return html`
      <button
        @click="${() => this.setOpen(!this.open)}"
        aria-haspopup="listbox"
        ${ref(this.triggerRef)}
      >
        <slot name="button" gds-allow="span">
          <span
            >${unsafeHTML(
              this.values.find((v) => v.selected)?.option.innerHTML
            )}
          </span>
        </slot>
      </button>
      <gds-popover
        .open=${this.open}
        @ui-state=${(e: CustomEvent) => this.setOpen(e.detail.open)}
        ${ref(this.registerPopoverTrigger)}
      >
        <gds-listbox
          ${ref(this.listBoxRef)}
          @select="${(e: CustomEvent) =>
            this.selectOption(e.target as GdsOption)}"
          ><slot gds-allow="gds-option"></slot
        ></gds-listbox>
      </gds-popover>
    `
  }

  private registerPopoverTrigger(el?: Element) {
    if (el) {
      const popover = el as GdsPopover
      popover.trigger = this.triggerRef.value as HTMLButtonElement
    }
  }

  private selectOption(option: GdsOption) {
    console.log('selectOption', option)
    this.value = option.value
    this.internals.setFormValue(option.value)
    this.setOpen(false)
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: option.value },
        bubbles: true,
        composed: true,
      })
    )
  }

  private setOpen(open: boolean) {
    this.open = open
    this.internals.ariaExpanded = open.toString()

    if (open) this.registerAutoCloseListener()
    else this.unregisterAutoCloseListener()

    this.dispatchEvent(
      new CustomEvent('ui-state', {
        detail: { open },
        bubbles: true,
        composed: true,
      })
    )
  }

  private registerAutoCloseListener() {
    window.addEventListener('click', this.autoCloseListener)
    window.addEventListener('keydown', this.autoCloseListener)
  }

  private unregisterAutoCloseListener() {
    window.removeEventListener('click', this.autoCloseListener)
    window.removeEventListener('keydown', this.autoCloseListener)
  }

  private autoCloseListener = (e: Event) => {
    console.log('auto close listener', e)
    if (e.target instanceof Node && !this.contains(e.target as Node))
      this.setOpen(false)
  }
}

export const GdsDropdownReact = createComponent({
  tagName: 'gds-dropdown',
  elementClass: GdsDropdown,
  react: React,
})
