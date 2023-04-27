import { LitElement, html, css, TemplateResult, unsafeCSS } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, queryAll } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import 'reflect-metadata'

import { Listbox, ListboxItem } from '../listbox/listbox'
import '../popover/popover'

import styles from './stem.styles.scss'

class GdsElement extends LitElement {
  private observer: MutationObserver

  private _mutationCallback(mutationsList: MutationRecord[]) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        this.requestUpdate()
        this.mutationCallback()
      }
    }
  }

  /**
   * @description Override this method to respond to DOM changes
   * @returns void
   * @example mutationCallback() {
   *  console.log('DOM changed')
   * }
   */
  protected mutationCallback() {
    console.log('DOM changed');
    
  }

  /**
   * @param elementName The name of the element to map
   * @param callback A mapping function that takes an element and returns a TemplateResult
   * @returns A list of TemplateResults
   * @example this.mapChildren('some-element', (el) => html`<some-other-element>${el.innerHTML}</some-other-element>`)
   *
   * @description `mapChildren` can be used to transform a list of children to another type of element, or to restrict the children to a specific type of element.
   */
  protected mapChildren(
    elementName: string,
    callback: (child: Element) => TemplateResult
  ) {
    return Array.from(this.querySelectorAll(elementName) || []).map(callback)
  }

  /**
   * @param elementName The name of the element to map
   * @param callback A mapping function that takes an element and returns a TemplateResult
   * @param fallback A fallback TemplateResult to return if no children are found
   * @returns A list of TemplateResults or a fallback TemplateResult
   * @example this.mapChildrenOr('some-element', (el) => html`<some-other-element>${el.innerHTML}</some-other-element>`, html`<p>Default content</p>`)
   *
   * @description Like `mapChildren`, but with fallback content if there are no children of the specified type.
   */
  protected mapChildrenOr(
    elementName: string,
    callback: (child: Element) => TemplateResult,
    fallback: TemplateResult
  ) {
    const mapped = this.mapChildren(elementName, callback)
    return mapped.length > 0 ? mapped : fallback
  }

  constructor() {
    super()
    this.observer = new MutationObserver(this._mutationCallback.bind(this))
    this.observer.observe(this, {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: true,
    })
  }
}

@customElement('gds-dropdown')
export class Dropdown extends GdsElement {
  static styles = unsafeCSS(styles)
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }

  open = false
  value: any

  static properties = {
    open: { type: Boolean, reflect: true },
    value: { reflect: true },
  }

  static get formAssociated() {
    return true
  }

  private internals: ElementInternals
  private listBoxRef: Ref<Listbox> = createRef()
  private _values: { option: GdsOption; selected: boolean }[] = []

  constructor() {
    super()
    this.internals = this.attachInternals() as any
    this.internals.role = 'combobox'

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

    this.addEventListener('focusout', (e) => {
      this.open = false
    })
  }

  get values() {
    return this._values.map((v) => ({
      ...v,
      selected: this.value === v.option.value,
    }))
  }

  mutationCallback() {
    this._values = Array.from<GdsOption>(
      this.querySelectorAll('gds-option') || []
    ).map((option) => ({
      option: option,
      selected: false,
    }))
    this.value = this.value || this.values[0]?.option.value
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.internals.setFormValue(this.value)
    this.internals.ariaExpanded = this.open.toString()
  }

  render() {
    return html`
      ${this.mapChildrenOr(
        'gds-button',
        (button) => this.buttonTemplate(html`${unsafeHTML(button.innerHTML)}`),
        this.buttonTemplate(
          html`${unsafeHTML(
            this.values.find((v) => v.selected)?.option.innerHTML
          )}`
        )
      )}
      ${this.open
        ? html`<gds-popover .open=${this.open}>
            <gds-listbox ${ref(this.listBoxRef)}
              >${this.mapChildren('gds-option', (el) => {
                const option = el as GdsOption
                return html`<gds-listbox-item
                  .value="${option.value}"
                  @select="${() => this.selectOption(option.value)}"
                  >${unsafeHTML(option.innerHTML)}</gds-listbox-item
                >`
              })}
            </gds-listbox>
          </gds-popover>`
        : ''}
    `
  }

  private selectOption(optionValue: any) {
    this.value = optionValue
    this.internals.setFormValue(optionValue)
    this.setOpen(false)
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: optionValue },
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

  private buttonTemplate(content = html`Dropdown button`) {
    return html`<button
      @click="${() => this.setOpen(!this.open)}"
      aria-haspopup="listbox"
    >
      <span>${content}</span>
    </button>`
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
