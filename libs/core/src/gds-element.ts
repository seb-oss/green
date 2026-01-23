import { LitElement } from 'lit'
import { state } from 'lit/decorators.js'

import { DynamicStylesController } from './utils/controllers/dynamic-styles-controller'
import { toPascalCase } from './utils/helpers/casing'

// This nis needed to support legacy decorators. Once we upgrade to TC39 standard decorators across the lib, we can remove this.
// More info: https://lit.dev/Components/decorators/#decorator-versions
import 'reflect-metadata'

/**
 * Base class for Green Core elements.
 * This class sets up the base functionality that all Green Core elements share.
 *
 * @internal
 *
 * @event gds-element-disconnected - When the element is disconnected from the DOM
 */
export class GdsElement extends LitElement {
  /**
   * Defines the custom element in the custom element registry.
   * This method needs to be called once before the element can be used.
   */
  static define(): void {
    // This method is meant to be overriden by the gdsCustomElement decorator,
    // so here we do nothing.
    return void 0
  }

  /**
   * Whether the element is defined in the custom element registry.
   */
  static isDefined = false

  /**
   * Style expression properties for this element will use this selector by default.
   */
  static styleExpressionBaseSelector = ':host'

  /**
   * The semantic version of this element. Can be used for troubleshooting to verify the version being used.
   */
  readonly semanticVersion = '__GDS_SEM_VER__'

  /**
   * The unscoped name of this element. This attribute is set automatically by the element and is inteded to be read-only.
   *
   * @attribute gds-element
   * @readonly
   */
  gdsElementName?: string

  /**
   * Whether the element is using transitional styles.
   * @internal
   */
  @state()
  _isUsingTransitionalStyles = false

  /**
   * @private
   */
  _dynamicStylesController: DynamicStylesController

  constructor() {
    super()
    this._dynamicStylesController = new DynamicStylesController(this)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('gds-element', this.gdsElementName?.toString() || '')
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.dispatchEvent(
      new CustomEvent('gds-element-disconnected', {
        bubbles: true,
        composed: false,
      }),
    )
  }

  /**
   * Dispatches a standard event with the given name and options.
   * A pascal cased version of the event name is also dispatched for compatibility.
   */
  dispatchStandardEvent(name: string, options?: EventInit): boolean {
    const computedOptions = {
      bubbles: true,
      composed: false,
      cancelable: true,
      ...options,
    }

    // Dispatch both the original event name and a pascal cased version
    // to maintain compatibility with both naming conventions, and consolidate
    // the results to capture any cancellation.
    return [
      this.dispatchEvent(new Event(name, computedOptions)),
      this.dispatchEvent(new Event(toPascalCase(name), computedOptions)),
    ].every((event) => event !== false)
  }

  /**
   * Dispatches a custom event with the given name and options.
   * A pascal cased version of the event name is also dispatched for compatibility.
   */
  dispatchCustomEvent<T>(
    name: string,
    options: CustomEventInit<T> = {},
  ): boolean {
    const computedOptions = {
      bubbles: true,
      composed: false,
      cancelable: true,
      ...options,
    }

    return [
      this.dispatchEvent(new CustomEvent(name, computedOptions)),
      this.dispatchEvent(new CustomEvent(toPascalCase(name), computedOptions)),
    ].every((event) => event !== false)
  }
}
