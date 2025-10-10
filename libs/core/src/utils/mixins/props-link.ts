// utils/mixins/props-link.ts
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'

type Constructor<T = GdsElement> = new (...args: any[]) => T

/**
 * Interface defining the properties available for link functionality
 * @interface LinkProps
 */
export interface LinkProps {
  /**
   * URL that the link points to
   * @property {string} [href]
   */
  href?: string

  /**
   * Specifies where to open the linked document
   * @property {'_self' | '_blank' | '_parent' | '_top'} [target]
   */
  target?: '_self' | '_blank' | '_parent' | '_top'

  /**
   * Specifies the relationship between the current document and the linked document
   * When target="_blank", automatically includes "noreferrer noopener" for security
   * @property {string} [rel]
   */
  rel?: string

  /**
   * When present, indicates that the linked resource should be downloaded
   * @property {string | ''} [download] - Can be empty string (use browser-detected filename) or a suggested filename
   */
  download?: string | ''
}

/**
 * Mixin that adds link-related properties to a component.
 * Provides standard anchor/link functionality with built-in security features.
 *
 * @param {Constructor<GdsElement>} base - The base class to extend from
 * @returns {Constructor<LinkProps> & T} - The enhanced class with link properties
 *
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
     * @property {'_self' | '_blank' | '_parent' | '_top'}
     */
    @property()
    target?: '_self' | '_blank' | '_parent' | '_top'

    /**
     * Specifies the relationship between the current document and the linked document
     * Automatically adds security-related values when target="_blank"
     *
     * @property {string}
     */
    @property()
    get rel(): string | undefined {
      if (this._rel) {
        return this._rel
      }
      return this.target === '_blank' ? 'noreferrer noopener' : undefined
    }
    set rel(value: string | undefined) {
      this._rel = value
    }
    private _rel?: string

    /**
     * When present, indicates that the linked resource should be downloaded
     * rather than navigated to
     *
     * @property {string | ''}
     */
    @property()
    download?: string | ''
  }

  return LinkPropsMixin as Constructor<LinkProps> & T
}
