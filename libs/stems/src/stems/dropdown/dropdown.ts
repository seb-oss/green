import { LitElement, html, css, TemplateResult, unsafeCSS } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, queryAll } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import 'reflect-metadata'

import { constrainSlots } from '#/utils'

import { Listbox, ListboxItem } from '../listbox/listbox'
import '../popover/popover'

import styles from './stem.styles.scss'

@customElement('gds-dropdown')
export class Dropdown extends LitElement {
  static styles = unsafeCSS(styles)
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }
  static properties = {
    open: { type: Boolean, reflect: true },
    value: { reflect: true },
  }
  static formAssociated = true

  open = false
  value: any

  private internals: ElementInternals
  private listBoxRef: Ref<Listbox> = createRef()
  private _optionElements: HTMLCollectionOf<GdsOption>

  constructor() {
    super()
    this.internals = this.attachInternals() as any
    this.internals.role = 'combobox'
    constrainSlots(this)

    this.addEventListener('keydown', async (e) => {
      if (e.key === 'ArrowDown') {
        this.open = true
        await this.updateComplete
        this.listBoxRef.value?.focus()
      }
      if (e.key === 'Escape') {
        this.open = false
      }
    })

    // this.addEventListener('focusout', (e) => {
    //   this.open = false
    // })

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
      >
        <slot name="button" gds-allow="span">
          <span
            >${unsafeHTML(
              this.values.find((v) => v.selected)?.option.innerHTML
            )}
          </span>
        </slot>
      </button>
      <gds-popover .open=${this.open}>
        <gds-listbox
          ${ref(this.listBoxRef)}
          @select="${(e: CustomEvent) =>
            this.selectOption(e.target as GdsOption)}"
          ><slot gds-allow="gds-option"></slot
        ></gds-listbox>
      </gds-popover>
    `
  }

  private selectOption(option: GdsOption) {
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
    this.dispatchEvent(
      new CustomEvent('ui-state', {
        detail: { open },
        bubbles: true,
        composed: true,
      })
    )
  }
}

@customElement('gds-option')
export class GdsOption extends ListboxItem {}

export const DropdownReact = createComponent({
  tagName: 'gds-dropdown',
  elementClass: Dropdown,
  react: React,
})

export const DropdownOptionReact = createComponent({
  tagName: 'gds-option',
  elementClass: GdsOption,
  react: React,
})
