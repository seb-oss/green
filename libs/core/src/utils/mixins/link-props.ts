import { property, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'

type Constructor<T = GdsElement> = new (...args: any[]) => T

export interface LinkProps {
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  rel?: string
  /**
   * When present, indicates that the linked resource should be downloaded
   * Can be empty string (use browser-detected filename) or a suggested filename
   */
  download?: string | ''
}

/**
 * Mixin that adds link-related properties to a component.
 * Use this for any component that needs to behave as a link/anchor.
 */
export function withLinkProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<LinkProps> & T {
  class LinkPropsMixin extends base implements LinkProps {
    /**
     * URL that the link points to
     */
    // @property()
    // href?: string

    /**
     * Specifies where to open the linked document
     */
    @property()
    target?: '_self' | '_blank' | '_parent' | '_top'

    /**
     * Specifies the relationship between the current document and the linked document
     */
    @property()
    rel?: string

    /**
     * When present, indicates that the linked resource should be downloaded
     * If value is empty string, browser will suggest a filename
     * If value is provided, it will be used as the suggested filename
     */
    @property()
    download?: string | ''
  }

  return LinkPropsMixin as Constructor<LinkProps> & T
}
