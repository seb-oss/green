import { unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { html as staticHtml } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import style from './link.css?inline'

/**
 * @element gds-link
 * @status beta
 *
 * @slot main - Content to be displayed as the link string.
 * @slot lead - An optional slot that allows a `gds-icon` element to be placed before the label.
 * @slot trail - An optional slot that allows a `gds-icon` element to be placed after the label.
 *
 * @event click - Fired when the link is clicked.
 *
 */
@gdsCustomElement('gds-link')
export class GdsLink extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

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

  constructor() {
    super()
  }

  render() {
    return staticHtml`
      <a
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel || this.#defaultRel)}
        download=${ifDefined(this.download)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `
  }

  get #defaultRel() {
    return this.target === '_blank' ? 'noreferrer noopener' : undefined
  }
}
