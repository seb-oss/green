// Image Props
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'

type Constructor<T = GdsElement> = new (...args: any[]) => T

export interface ImageProps {
  /**
   * The URL of the image
   */
  src?: string

  /**
   * The srcset attribute for responsive images
   * Format: "image.jpg 1x, image-2x.jpg 2x" or "image-320.jpg 320w, image-640.jpg 640w"
   */
  srcset?: string

  /**
   * The sizes attribute for responsive images
   * Format: "(max-width: 320px) 280px, (max-width: 640px) 580px, 800px"
   */
  sizes?: string

  /**
   * Alternative text description of the image
   * Required for accessibility. Should be empty string if image is decorative.
   */
  alt?: string

  /**
   * Loading strategy for the image
   */
  loading?: 'lazy' | 'eager'

  /**
   * Decoding strategy for the image
   */
  decoding?: 'auto' | 'sync' | 'async'
}

/**
 * Mixin that adds image-related properties to a component.
 * Use this for any component that needs to display images with responsive
 * and accessibility support.
 */
export function withImageProps<T extends Constructor<GdsElement>>(
  base: T,
): Constructor<ImageProps> & T {
  class ImagePropsMixin extends base implements ImageProps {
    @property()
    src?: string

    @property()
    srcset?: string

    @property()
    sizes?: string

    @property()
    alt?: string

    @property()
    loading?: 'lazy' | 'eager' = 'lazy'

    @property()
    decoding?: 'auto' | 'sync' | 'async' = 'auto'
  }

  return ImagePropsMixin as Constructor<ImageProps> & T
}
