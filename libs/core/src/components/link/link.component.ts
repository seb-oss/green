import { nothing, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { html as staticHtml } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import LinkStyles from './link.styles'

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
export class GdsLink extends withMarginProps(
  withSizeXProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [tokens, unsafeCSS(LinkStyles)]

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
   * Provides an accessible name for the link that will be read by screen readers.
   * Use this when:
   * - The link contains only an icon
   * - The visual text needs a different description for screen readers
   * - Additional context is needed for accessibility
   *
   * @example
   * // Icon-only link
   * <gds-link href="/settings" label="Open settings">
   *   <gds-icon-settings></gds-icon-settings>
   * </gds-link>
   *
   * // Different screen reader text
   * <gds-link href="/article" label="Read full article about climate change">
   *   Read more
   * </gds-link>
   */
  @property()
  label = ''

  /**
   * Causes the browser to treat the linked URL as a download. Can be used with or without a filename value. Only used when href is present.
   */
  @property()
  download?: string

  /**
   * Controls the text-decoration property of the link.
   * Supports all valid CSS text-decoration values.
   *
   * Setting `text-decoration` on hover you can do it like this:
   * ```html
   * <gds-link text-decoration="hover:underline">Underline on Hover</gds-link>
   * ```
   * @property text-decoration
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: 'a',
  })
  'text-decoration'?: string

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'none')
  }

  render() {
    return staticHtml`
      <a
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this.rel || this.#defaultRel)}
        download=${ifDefined(this.download)}
        aria-label=${this.label || nothing}
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
