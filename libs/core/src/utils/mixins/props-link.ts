// utils/mixins/props-link.ts
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'

type Constructor<T = GdsElement> = new (...args: any[]) => T

/**
 * Interface defining the properties available for link functionality
 */
export interface LinkProps {
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  rel?: string
  download?: string | boolean
  ping?: string
}

/**
 * Mixin that adds link-related properties to a component.
 * Provides standard anchor/link functionality with built-in security features.
 */
export function withLinkProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<LinkProps> & T {
  class LinkPropsMixin extends base implements LinkProps {
    /**
     * URL that the link points to
     * Can be absolute, relative, or fragment identifier
     */
    @property()
    href?: string

    /**
     * Specifies where to open the linked document
     */
    @property()
    target?: '_self' | '_blank' | '_parent' | '_top'

    /**
     * Specifies the relationship between the current document and the linked document
     * Automatically adds security-related values when target="_blank"
     */
    @property()
    get rel(): string | undefined {
      if (this.#rel) {
        return this.#rel
      }
      return this.target === '_blank' ? 'noreferrer noopener' : undefined
    }
    set rel(value: string | undefined) {
      this.#rel = value
    }
    #rel?: string

    /**
     * When present, indicates that the linked resource should be downloaded
     */
    @property({ type: String })
    download?: string | boolean

    /**
     * Specifies a space-separated list of URLs to which, when the link is followed,
     * POST requests with the body ping will be sent by the browser.
     */
    @property()
    ping?: string
  }

  return LinkPropsMixin as Constructor<LinkProps> & T
}
