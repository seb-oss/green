// utils/mixins/props-card.ts
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import type { ClassInfo } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'

type Constructor<T = GdsElement> = new (...args: any[]) => T

export interface CardProps {
  /**
   * The main title of the card
   */
  title?: string

  /**
   * A brief description or summary text
   */
  excerpt?: string

  /**
   * Optional label text (e.g., category, tag, or status)
   */
  label?: string

  /**
   * Visual style variant of the card
   * - neutral-01: Default solid background
   * - neutral-02: Alternative background color
   */
  variant?: 'neutral-01' | 'neutral-02'

  /**
   * Controls the card's border style
   * @example
   * // As boolean (uses default border)
   * <gds-card outlined></gds-card>
   *
   * // With specific variant
   * <gds-card outlined variant="neutral-02"></gds-card>
   */
  outlined?: boolean

  /**
   * HTML tag for the card title
   * @default 'h2'
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Aspect ratio/format of the card's media section
   */
  ratio?: 'landscape' | 'square'

  /**
   * Returns classMap directive ready for use in templates
   * @param type - Optional card type identifier
   */
  classes(type?: 'linked' | 'static'): ReturnType<typeof classMap>
}

/**
 * Mixin that adds card-related properties to a component.
 * Use this for any component that needs card-like content structure.
 */
export function withCardProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<CardProps> & T {
  class CardPropsMixin extends base implements CardProps {
    /**
     * The main title of the card
     */
    @property({ reflect: false })
    title = ''

    /**
     * A brief description or summary text
     */
    @property({ reflect: false })
    excerpt = ''

    /**
     * Optional label text (e.g., category, tag, or status)
     */
    @property({ reflect: false })
    label = ''

    /**
     * Card background variant
     * @default 'neutral-01'
     */
    @property({ reflect: false })
    variant: 'neutral-01' | 'neutral-02' = 'neutral-01'

    /**
     * Enables border styling
     * Designed to work with neutral-02 variant
     * @default false
     */
    @property({ type: Boolean, reflect: false })
    outlined = false

    /**
     * HTML tag for the card title
     * Controls heading level for accessibility
     */
    @property({ reflect: false })
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2'

    /**
     * Aspect ratio/format of the card's media section
     * - landscape: 16:9 or similar horizontal format
     * - square: 1:1 square format
     */
    @property({ reflect: false, attribute: 'aspect-ratio' })
    ratio: 'landscape' | 'square' = 'landscape'

    /**
     * Protected method to get base card classes
     * Can be extended or overridden by implementing classes
     */
    classes(type?: 'linked' | 'static') {
      const classes: ClassInfo = {
        card: true,
        [`card-${type}`]: !!type,
        outlined: this.outlined,
        [`variant-${this.variant}`]: true,
        [`ratio-${this.ratio}`]: true,
      }
      return classMap(classes)
    }
  }

  return CardPropsMixin as Constructor<CardProps> & T
}
