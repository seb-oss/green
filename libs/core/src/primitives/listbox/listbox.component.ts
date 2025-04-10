import { property } from 'lit/decorators.js'
import { createRef, Ref, ref } from 'lit/directives/ref.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { TransitionalStyles } from '../../transitional-styles'
import {
  ListboxKbNavController,
  ListboxKbNavigation,
} from '../../utils/controllers/listbox-kb-nav-controller'
import { watch } from '../../utils/decorators/watch'
import { unwrap } from '../../utils/helpers/unwrap-slots'
import style from './listbox.styles'
import { GdsOption } from './option.component'

import type { OptionsContainer } from './option.component'

/**
 * @element gds-listbox
 * @internal
 *
 * A listbox is a widget that allows the user to select one or more items from a list of choices.
 * This primitive corresponds to the aria listbox role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
 *
 * The listbox handles keyboard navigation and manages focus and selection of options.
 *
 * Can be used together with the `gds-option` primitive.
 *
 * @slot - The default slot. Only `gds-option` elements should be used here.
 */
@gdsCustomElement('gds-listbox', { dependsOn: [GdsOption] })
export class GdsListbox
  extends GdsElement
  implements ListboxKbNavigation, OptionsContainer
{
  static styles = style

  /**
   * Controls whether the listbox allows multiple selection or not.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'aria-multiselectable',
    converter: {
      fromAttribute: Boolean,
      toAttribute: (value: boolean) => value.toString(),
    },
  })
  multiple = false

  /**
   * Delegate function for comparing option values.
   */
  @property()
  compareWith: (a: any, b: any) => boolean = (a, b) => a === b

  #slotRef: Ref<HTMLSlotElement> = createRef()

  constructor() {
    super()
    new ListboxKbNavController(this)
  }

  get navigableItems() {
    return this.visibleOptionElements
  }

  /**
   * Returns a list of all `gds-option` elements in the listbox.
   */
  get options() {
    if (!this.#slotRef.value) return []

    return (
      (unwrap(this.#slotRef.value).assignedElements() as GdsOption[]).filter(
        (o) =>
          !o.hasAttribute('isplaceholder') && o.gdsElementName === 'gds-option',
      ) || []
    )
  }

  /**
   * Returns a list of all visible `gds-option` elements in the listbox.
   */
  get visibleOptionElements() {
    return this.options.filter((el) => !el.hidden)
  }

  /**
   * Returns a list of all visible `gds-option` elements in the listbox.
   */
  get visibleSelectedOptionElements() {
    return this.options.filter((el) => el.selected && !el.hidden)
  }

  /**
   * Returns a list of all selected `gds-option` elements in the listbox.
   */
  get selection(): GdsOption[] {
    return this.options.filter((el) => el.selected)
  }

  set selection(values: any[]) {
    this.options.forEach((el) => {
      el.selected = values.some((v) => this.compareWith(v, el.value))
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'listbox')
    TransitionalStyles.instance.apply(this, 'gds-listbox')

    this.addEventListener('gds-select', this.#handleSelect)
  }

  /**
   * Focuses the first selected option in the listbox.
   * If no option is selected, the first visible option is focused.
   */
  focus() {
    ;(
      this.visibleSelectedOptionElements[0] || this.visibleOptionElements[0]
    )?.focus()
  }

  render() {
    return html`<slot ${ref(this.#slotRef)}></slot>`
  }

  /**
   * Re-renders all options in the listbox when the `multiple` property changes.
   */
  @watch('multiple')
  private _rerenderOptions() {
    this.options.forEach((el) => {
      el.requestUpdate()
    })
  }

  #handleSelect = (e: Event) => {
    const option = e.target as GdsOption

    if (this.multiple) option.selected = !option.selected
    else {
      option.selected = true
      Array.from(this.options).forEach((el) => {
        if (el !== option) el.selected = false
      })
    }

    ;(this as any).ariaActiveDescendantElement = option

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: false,
        composed: false,
      }),
    )
  }
}
