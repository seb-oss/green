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
   */
  appearance?: 'neutral' | 'outlined' | 'plain'

  /**
   * Aspect ratio/format of the card's media section
   */
  aspectRatio?: 'landscape' | 'square'

  /**
   * Spacing like padding on the card content
   */
  size?: 'small' | 'large'

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
     * Visual style variant of the card
     * - neutral: Default card style
     * - outlined: Card with outline/border
     * - plain: Minimal card style
     */
    @property({ reflect: false })
    appearance: 'neutral' | 'outlined' | 'plain' = 'neutral'

    /**
     * Visual style variant of the card
     * - neutral: Default card style
     * - outlined: Card with outline/border
     * - plain: Minimal card style
     */
    @property({ reflect: false })
    size: 'small' | 'large' = 'large'

    /**
     * Aspect ratio/format of the card's media section
     * - landscape: 16:9 or similar horizontal format
     * - square: 1:1 square format
     */
    @property({ reflect: false, attribute: 'aspect-ratio' })
    aspectRatio: 'landscape' | 'square' = 'landscape'

    /**
     * Protected method to get base card classes
     * Can be extended or overridden by implementing classes
     */
    classes(type?: string): Record<string, boolean> {
      return {
        card: true,
        [`card-${type || 'base'}`]: !!type,
        [`appearance-${this.appearance}`]: true,
        [`aspect-ratio-${this.aspectRatio}`]: true,
        [`size-${this.size}`]: true,
      }
    }
  }

  return CardPropsMixin as Constructor<CardProps> & T
}
