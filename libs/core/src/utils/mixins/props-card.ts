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
  rank?: 'neutral' | 'outlined' | 'plain'

  /**
   * Aspect ratio/format of the card's media section
   */
  media?: 'landscape' | 'square'

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
    @property()
    title = ''

    /**
     * A brief description or summary text
     */
    @property()
    excerpt = ''

    /**
     * Optional label text (e.g., category, tag, or status)
     */
    @property()
    label = ''

    /**
     * Visual style variant of the card
     * - neutral: Default card style
     * - outlined: Card with outline/border
     * - plain: Minimal card style
     */
    @property({ reflect: false })
    rank: 'neutral' | 'outlined' | 'plain' = 'neutral'

    /**
     * Aspect ratio/format of the card's media section
     * - landscape: 16:9 or similar horizontal format
     * - square: 1:1 square format
     */
    @property({ reflect: false })
    media: 'landscape' | 'square' = 'landscape'

    /**
     * Protected method to get base card classes
     * Can be extended or overridden by implementing classes
     */
    classes(type?: string): Record<string, boolean> {
      return {
        card: true,
        [`card-${type || 'base'}`]: !!type,
        [`rank-${this.rank}`]: true,
        [`media-${this.media}`]: true,
      }
    }
  }

  return CardPropsMixin as Constructor<CardProps> & T
}
