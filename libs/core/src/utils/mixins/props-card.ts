// utils/mixins/props-card.ts
import { property } from 'lit/decorators.js'

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
   * Aspect ratio/format of the card's media section
   */
  ratio?: 'landscape' | 'square'

  /**
   * Card classes in a orgnaised way if used as default
   */
  classes: (type?: string) => Record<string, boolean>
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
    classes(type?: string): Record<string, boolean> {
      return {
        card: true,
        outlined: true,
        [`card-${type || 'base'}`]: !!type,
        [`variant-${this.variant}`]: true,
        [`ratio-${this.ratio}`]: true,
      }
    }
  }

  return CardPropsMixin as Constructor<CardProps> & T
}
