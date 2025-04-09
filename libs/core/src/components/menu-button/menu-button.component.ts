import { unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { literal, html as staticHtml } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import {
  withLayoutChildProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import MenuButtonCSS from './menu-button.styles'

/**
 * @element gds-menu-button
 * @status stable
 *
 * @slot - Content to be displayed as the button label.
 * @slot lead - An optional slot that allows a `gds-icon` element to be placed before the label.
 * @slot trail - An optional slot that allows a `gds-icon` element to be placed after the label.
 *
 * @event click - Fired when the button is clicked.
 *
 * @csspart main-slot - The main slot of the button, between the lead and trail slots.
 */
@gdsCustomElement('gds-menu-button')
export class GdsMenuButton extends withSizeXProps(
  withLayoutChildProps(GdsElement),
) {
  static styles = [tokens, unsafeCSS(MenuButtonCSS)]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * Whether the menu-button is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false

  /**
   * The label of the menu-button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property()
  label = ''

  /**
   * When set, the underlying button will be rendered as an anchor element.
   */
  @property()
  href = ''

  /**
   * Where to display the linked URL. Only used when href is present.
   */
  @property()
  target?: '_self' | '_blank' | '_parent' | '_top'

  /**
   * The relationship of the linked URL as space-separated link types. Only used when href is present. Defaults to "noreferrer noopener" for security reasons when target is set.
   */
  @property()
  rel?: string

  /**
   * Causes the browser to treat the linked URL as a download. Can be used with or without a filename value. Only used when href is present.
   */
  @property()
  download?: string

  /**
   * The label of the menu-button. Use this to add an accessible label to the button when no text is provided in the default slot.
   */
  @property({ type: Boolean, reflect: true })
  compact = false

  /**
   * Whether the menu button is selected
   */
  @property({ type: Boolean, reflect: true })
  selected = false

  constructor() {
    super()
  }

  render() {
    const classes = {
      button: true,
      selected: this.selected,
      compact: this.compact,
    }

    const tag = this.#isLink ? literal`a` : literal`button`

    return staticHtml`
      <${tag}
        class="${classMap(classes)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${ifDefined(this.#isLink ? this.href : undefined)}
        target=${ifDefined(this.#isLink ? this.target : undefined)}
        rel=${ifDefined(this.#isLink ? this.rel || this.#defaultRel : undefined)}
        download=${ifDefined(this.#isLink ? this.download : undefined)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${tag}>
    `
  }

  get #isLink() {
    return this.href.length > 0
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }
}
