// File: gds-spinner.types.ts

/**
 * Valid size options for the spinner component
 * @public
 *
 * - 'sm': Small spinner (2rem)
 * - 'md': Medium spinner (3.75rem)
 * - 'lg': Large spinner (6rem)
 * - 'default': Same as 'md' (3.75rem)
 */
export type SpinnerSize = 'default' | 'sm' | 'md' | 'lg'

/**
 * Properties available on the GdsSpinner component
 * @public
 */
export interface GdsSpinnerProperties {
  /**
   * Text label for the spinner - serves as both visual text (when shown) and screen reader text
   * When not provided, a default accessibility label will be used
   *
   * @example
   * <gds-spinner label="Processing your request..."></gds-spinner>
   */
  label?: string

  /**
   * Whether to show the label visually
   * Default: false (label is hidden visually but still announced by screen readers)
   *
   * @example
   * <gds-spinner label="Loading..." showLabel></gds-spinner>
   */
  showLabel: boolean

  /**
   * Whether the spinner should cover its parent element with a backdrop
   * Useful for indicating loading state of a specific section
   * Parent should have position: relative or similar positioning context
   *
   * @default false
   *
   * @example
   * <div style="position: relative; height: 200px;">
   *   <gds-spinner label="Loading content..." cover></gds-spinner>
   * </div>
   */
  cover: boolean

  /**
   * Whether the spinner should take over the entire viewport
   * Useful for app-wide loading states
   *
   * @default false
   *
   * @example
   * <gds-spinner label="Loading application..." fullscreen></gds-spinner>
   */
  fullscreen: boolean

  /**
   * Size variant of the spinner
   *
   * @default 'default' (Same as 'md')
   *
   * @example
   * <gds-spinner label="Small spinner" size="sm"></gds-spinner>
   */
  size: SpinnerSize
}

/**
 * Configuration options for the spinner component
 * @internal
 */
export interface SpinnerConfig {
  /**
   * Default label used for accessibility when no label is provided
   */
  defaultLabel: string

  /**
   * CSS z-index value for full-screen spinners
   */
  fullscreenZIndex: number
}
